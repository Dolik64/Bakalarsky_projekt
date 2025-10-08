#!/usr/bin/env python3
# ai_context_dump.py
# Stručný sémantický kontext webového projektu pro AI (bez dlouhých dumpů)

from __future__ import annotations
import os, re, json
from pathlib import Path
from datetime import datetime

# === Uprav si kořen a explicitní excludy ===
#ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook"
ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte"

EXPLICIT_EXCLUDES = [
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\video_1596110981_original.mp4",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\zaloha",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\slovensko\images",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\slovensko\videos\10",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\slovensko\voices",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\2025-01-03 22-16-04.mkv",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_Takova_normalni_rodinka\images",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_Takova_normalni_rodinka\videos",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte\images",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte\videos",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte\voices",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\TZ-DON-Buch_Iran\videos",
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\TZ-DON-Buch_Iran\images",
]

# Automatické vyloučení (adresáře/přípony, které pro kontext logiky nebývají klíčové)
AUTO_EXCLUDE_DIRS = {
    "images","image","img","media","video","videos","voice","voices","audio",
    "node_modules","dist","build",".git",".svn","__pycache__",".venv","cache","tmp","temp","zaloha","backups","backup"
}
AUTO_EXCLUDE_EXTS = {
    ".png",".jpg",".jpeg",".gif",".webp",".bmp",".tiff",".ico",".svgz",
    ".mp4",".mkv",".avi",".mov",".wmv",".flv",".webm",".m4v",
    ".mp3",".wav",".aac",".ogg",".flac",".m4a",
    ".zip",".rar",".7z",".tar",".gz",".bz2",".xz",
    ".woff",".woff2",".ttf",".otf",".eot",
    ".pdf",".iso",".dmg",".exe",".dll",".bin"
}

# Omezovače
MAX_JS_SCAN_BYTES = 64_000     # z JS čteme jen první blok pro importy/exporty/URL
MAX_JSON_KEYS = 50             # kolik klíčů na úrovni vytisknout
MAX_JSON_LIST_ITEMS = 10       # kolik položek pole ukázat (pak “... n items”)
MAX_CSS_SCAN_BYTES = 64_000    # z CSS jen první kus (na :root proměnné)
VENDOR_BIG_MIN = 150_000       # minifikované vendor balíky ≥ 150 KB přeskakujeme s poznámkou

# Regexy
RE_HTML_SCRIPT = re.compile(r'<script[^>]+src=["\']([^"\']+)["\']', re.I)
RE_HTML_LINK   = re.compile(r'<link[^>]+href=["\']([^"\']+)["\']', re.I)
RE_JS_IMPORT   = re.compile(r'^\s*import\s+(.*?)\s+from\s+[\'"]([^\'"]+)[\'"]', re.M)
RE_JS_EXPORT   = re.compile(r'^\s*export\s+(?:default\s+)?(class|function|const|let|var)?\s*([A-Za-z0-9_$]+)?', re.M)
RE_URLS        = re.compile(r'(?:(?:fetch|axios\.(?:get|post|put|delete|patch)|new\s+WebSocket)\s*\(\s*[\'"])([^\'"]+)', re.I)
RE_CSS_VAR     = re.compile(r':root\s*{([^}]*)}', re.S)
RE_CSS_VAR_LINE= re.compile(r'--([A-Za-z0-9_-]+)\s*:\s*([^;]+);')

def human_size(n:int)->str:
    u=["B","KB","MB","GB"]; s=float(n)
    for i in range(len(u)):
        if s<1024 or i==len(u)-1: return f"{s:.2f} {u[i]}"; s/=1024

def resolve_excludes(root:Path):
    ex_dirs, ex_files=set(), set()
    for raw in EXPLICIT_EXCLUDES:
        p=Path(raw); p = p if p.is_absolute() else (root/p)
        rp=p.resolve(strict=False)
        if rp.exists():
            (ex_dirs if rp.is_dir() else ex_files).add(rp)
    return ex_dirs, ex_files

def is_under(p:Path, anc:Path)->bool:
    try: p.resolve(strict=False).relative_to(anc.resolve(strict=False)); return True
    except: return False

def should_skip_dir(name:str)->bool: return name.lower() in AUTO_EXCLUDE_DIRS
def should_skip_file(p:Path)->bool: return p.suffix.lower() in AUTO_EXCLUDE_EXTS

def read_head(p:Path, limit:int)->bytes:
    try:
        with p.open("rb") as f: return f.read(limit)
    except: return b""

def short(s:str, n:int=200)->str:
    s=s.strip().replace("\r","")
    return s if len(s)<=n else s[:n]+"..."

def analyze_html(p:Path)->dict:
    b=read_head(p, 256_000)
    try: t=b.decode("utf-8",errors="replace")
    except: t=""
    return {
        "scripts":[m for m in RE_HTML_SCRIPT.findall(t)],
        "links":[m for m in RE_HTML_LINK.findall(t)]
    }

def analyze_js(p:Path)->dict:
    st=0
    try: st=p.stat().st_size
    except: pass
    head=read_head(p, MAX_JS_SCAN_BYTES)
    if not head: return {}
    try: txt=head.decode("utf-8",errors="replace")
    except: txt=""
    imports=[{"what":i.strip(),"from":fr} for i,fr in RE_JS_IMPORT.findall(txt)]
    exports=[]
    for kind,name in RE_JS_EXPORT.findall(txt):
        if kind or name: exports.append((kind or "").strip()+" "+(name or "").strip())
    urls=RE_URLS.findall(txt)
    return {
        "size": st,
        "imports": imports[:50],
        "exports": exports[:50],
        "endpoints": urls[:50],
        "note": ("vendor/minified-large" if st>=VENDOR_BIG_MIN and txt.count("\n")<100 else "")
    }

def json_type_preview(obj, depth=0):
    if depth>2: return "...depth limit..."
    if isinstance(obj, dict):
        keys=list(obj.keys())[:MAX_JSON_KEYS]
        return {k: json_type_preview(obj[k], depth+1) for k in keys}
    if isinstance(obj, list):
        sample=obj[:MAX_JSON_LIST_ITEMS]
        out=[json_type_preview(x, depth+1) for x in sample]
        if len(obj)>MAX_JSON_LIST_ITEMS: out.append(f"... {len(obj)-MAX_JSON_LIST_ITEMS} more")
        return out
    return type(obj).__name__

def analyze_json(p:Path)->dict:
    try:
        data=json.loads(p.read_text(encoding="utf-8",errors="replace"))
    except Exception as e:
        return {"error": f"json parse: {e.__class__.__name__}"}
    return {"schema": json_type_preview(data)}

def analyze_css(p:Path)->dict:
    head=read_head(p, MAX_CSS_SCAN_BYTES)
    try: txt=head.decode("utf-8",errors="replace")
    except: txt=""
    vars=[]
    for block in RE_CSS_VAR.findall(txt):
        for name,val in RE_CSS_VAR_LINE.findall(block):
            vars.append((name.strip(), short(val, 80)))
    return {"root_vars": vars[:50]}

def main():
    root=Path(ROOT_DIR)
    if not root.is_dir(): raise SystemExit(f"[ERROR] ROOT_DIR není složka: {root}")
    ex_dirs, ex_files=resolve_excludes(root)

    # Sběr souborů
    htmls=[]; jss=[]; jsons=[]; csss=[]; others=[]
    total_size=0; by_ext={}
    for cur, dirs, files in os.walk(root, topdown=True, followlinks=False):
        # prune dirs
        kept=[]
        for d in dirs:
            dp=Path(cur)/d
            if should_skip_dir(d) or any(is_under(dp, ex) for ex in ex_dirs): continue
            kept.append(d)
        dirs[:]=kept
        # files
        for f in files:
            p=(Path(cur)/f).resolve(strict=False)
            if p in ex_files or any(is_under(p, ex) for ex in ex_dirs): continue
            if should_skip_file(p): continue
            try: st=p.stat().st_size; total_size+=st
            except: st=0
            ext=p.suffix.lower(); by_ext[ext]=by_ext.get(ext,0)+1
            if ext in {".html",".htm"}: htmls.append(p)
            elif ext in {".js",".mjs",".cjs"}: jss.append(p)
            elif ext==".json": jsons.append(p)
            elif ext==".css": csss.append(p)
            else: others.append(p)

    out = Path(__file__).resolve().parent / f"ai_context_{root.name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.md"
    with out.open("w", encoding="utf-8", newline="\n") as fw:
        fw.write(f"# AI Context – {root}\n\n")
        fw.write("## Summary\n")
        fw.write(f"- Files considered: {len(htmls)+len(jss)+len(jsons)+len(csss)+len(others)}\n")
        fw.write(f"- Project size (approx.): {human_size(total_size)}\n")
        fw.write("- Distribution by extension: " + ", ".join(f"{k or '<noext>'}:{v}" for k,v in sorted(by_ext.items(), key=lambda kv: (-kv[1], kv[0]))[:12]) + "\n\n")

        fw.write("## Entrypoints (HTML)\n")
        for p in sorted(htmls):
            a=analyze_html(p)
            fw.write(f"- **{p.relative_to(root)}**\n")
            if a.get("links"):   fw.write(f"  - links: {a['links'][:8]}\n")
            if a.get("scripts"): fw.write(f"  - scripts: {a['scripts'][:8]}\n")
        fw.write("\n")

        fw.write("## JavaScript modules (imports/exports/endpoints)\n")
        for p in sorted(jss):
            a=analyze_js(p)
            if not a: continue
            rel=p.relative_to(root)
            note=f" [{a['note']}]" if a.get("note") else ""
            fw.write(f"- **{rel}** ({human_size(a.get('size',0))}){note}\n")
            if a.get("imports"):  fw.write(f"  - imports: {a['imports'][:5]}\n")
            if a.get("exports"):  fw.write(f"  - exports: {a['exports'][:5]}\n")
            if a.get("endpoints"):fw.write(f"  - endpoints: {a['endpoints'][:5]}\n")
        fw.write("\n")

        fw.write("## JSON schemas\n")
        for p in sorted(jsons):
            a=analyze_json(p)
            fw.write(f"- **{p.relative_to(root)}**\n")
            fw.write("  ```json\n")
            fw.write(json.dumps(a, ensure_ascii=False, indent=2)[:4000])
            fw.write("\n  ```\n")
        fw.write("\n")

        fw.write("## CSS (:root variables, partial)\n")
        for p in sorted(csss):
            a=analyze_css(p)
            if a.get("root_vars"):
                fw.write(f"- **{p.relative_to(root)}** – variables: " + ", ".join(f"{n}={v}" for n,v in a["root_vars"][:12]) + "\n")
        fw.write("\n")

        if others:
            fw.write("## Other small text files (names only)\n")
            for p in sorted(others)[:50]:
                fw.write(f"- {p.relative_to(root)}\n")
            if len(others)>50: fw.write(f"... and {len(others)-50} more\n")

    print(f"[OK] Kontextový soubor vytvořen: {out}")

if __name__=="__main__":
    main()
