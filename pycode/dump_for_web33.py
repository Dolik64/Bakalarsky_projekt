#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Štíhlý dump „důležitých“ souborů webové appky:
- Stromová hierarchie + zkrácený obsah (head+tail) pro texty.
- Speciální souhrny pro index.html (inline var book = {...}) a book.json.
- Soubor 'files' jako statistika.
- Velké statické knihovny a CSS vypisuje jen metrikami (řádky + sha256).
"""

from __future__ import annotations
import os, re, json, hashlib
from pathlib import Path
from datetime import datetime
from typing import Iterable, Set, Tuple

# === ▼ UPRAV TADY ▼ ==========================================================

# Kořen projektu:
ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte"

# Explicitní vyloučení:
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

# Automaticky vyloučené složky/přípony:
AUTO_EXCLUDE_DIR_NAMES = {
    "images","image","img","media","video","videos","voice","voices","audio",
    "zaloha","backup","backups","tmp","temp","cache",".git",".svn",
    "node_modules","dist","build",".venv","__pycache__",
}
AUTO_EXCLUDE_EXTS = {
    ".png",".jpg",".jpeg",".gif",".webp",".bmp",".tiff",".ico",".svgz",
    ".mp4",".mkv",".avi",".mov",".wmv",".flv",".webm",".m4v",
    ".mp3",".wav",".aac",".ogg",".flac",".m4a",
    ".zip",".rar",".7z",".tar",".gz",".bz2",".xz",
    ".exe",".dll",".so",".dylib",".bin",".dat",".pak",
    ".woff",".woff2",".ttf",".otf",".eot",
    ".pdf",".iso",".dmg",
}
# Extra vyloučení (ukecané a duplicitní artefakty):
EXTRA_AUTO_EXCLUDE_EXTS = {
    ".map",  # sourcemapy
}
EXTRA_AUTO_EXCLUDE_BASENAMES = {
    # sem můžeš přidat další soubory ke skrytí
}

# Co NAOPAK zahrnout (logika webu):
INCLUDE_EXTS = {
    ".html",".htm",".css",".js",".mjs",".cjs",".json",".txt",".md",".ini",".cfg",".conf",".env",".yml",".yaml",
    ".csv",".tsv",".xml",".svg",
}
ALWAYS_INCLUDE_BASENAMES = {
    "README","LICENSE","index.html","index.htm","book.json","wow.json",
    "connector.js","logging.js","RUNeScrapBook","RUNeScrapBook.bat",
}

# Režimy výstupu:
PRINT_TREE = True
PRINT_CONTENT = True
MAX_FILES_IN_CONTENT = None       # např. 150 pro tvrdý strop

# Limity výpisu obsahu (head+tail):
HEAD_BYTES = 1024
TAIL_BYTES = 256
MAX_TEXT_BYTES_PER_FILE = 1_000_000
MAX_FALLBACK_TEXT_SIZE = 128_000

# Speciální zkracování:
SUMMARIZE_BOOK_JSON = True
SUMMARIZE_INDEX_INLINE_BOOK = True
SUMMARIZE_FILES_MAPPING = True    # soubor s názvem přesně 'files'

# Soubory, u kterých se nevypisuje obsah vůbec (jen metriky):
SKIP_CONTENT_EXTS = {".css", ".map"}
SKIP_CONTENT_BASENAMES = {
    "libs-viewer.js",   # vendor bundle
    "combined.css",
    "styles.css",
}
# === ▲ UPRAV TADY ▲ ==========================================================


def human_size(n: int) -> str:
    units = ["B","KB","MB","GB","TB","PB"]
    f = float(n)
    for u in units:
        if f < 1024 or u == units[-1]:
            return f"{f:.2f} {u}"
        f /= 1024

def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()

def count_lines_from_bytes(b: bytes) -> int:
    # Počítá řádky bez nutnosti dekódovat
    return b.count(b"\n") + (1 if b and not b.endswith(b"\n") else 0)

def _is_probably_binary(sample: bytes) -> bool:
    if b"\x00" in sample:
        return True
    textlike = sum(32 <= ch <= 126 or ch in (9,10,13) for ch in sample)
    return (len(sample)-textlike)/max(1,len(sample)) > 0.30

def _resolve_explicits(root: Path, explicit: Iterable[str]) -> Tuple[Set[Path], Set[Path]]:
    ex_dirs, ex_files = set(), set()
    for raw in explicit:
        if not raw:
            continue
        p = Path(raw)
        if not p.is_absolute():
            p = root / p
        rp = p.resolve(strict=False)
        if rp.exists():
            (ex_dirs if rp.is_dir() else ex_files).add(rp)
    return ex_dirs, ex_files

def _should_exclude_dir_by_name(dirname: str) -> bool:
    return dirname.lower() in AUTO_EXCLUDE_DIR_NAMES

def _should_include_file(file: Path) -> bool:
    name = file.name
    if name in ALWAYS_INCLUDE_BASENAMES:
        return True
    if name in EXTRA_AUTO_EXCLUDE_BASENAMES:
        return False
    ext = file.suffix.lower()
    if ext in EXTRA_AUTO_EXCLUDE_EXTS:
        return False
    if ext in INCLUDE_EXTS:
        return True
    if ext in AUTO_EXCLUDE_EXTS:
        return False
    # fallback: malé textové soubory, pokud vypadají textově
    try:
        st = file.stat(follow_symlinks=False)
        if st.st_size <= MAX_FALLBACK_TEXT_SIZE:
            with file.open("rb") as f:
                sample = f.read(2048)
            return not _is_probably_binary(sample)
    except Exception:
        return False
    return False

def _is_under(path: Path, ancestor: Path) -> bool:
    try:
        path.resolve(strict=False).relative_to(ancestor.resolve(strict=False))
        return True
    except Exception:
        return False

def _iter_included_files(root: Path, ex_dirs: Set[Path], ex_files: Set[Path]):
    root = root.resolve(strict=False)
    for curr_dir, dirs, files in os.walk(root, topdown=True, followlinks=False):
        curr = Path(curr_dir)

        kept = []
        for d in sorted(dirs, key=str.lower):
            dp = (curr / d).resolve(strict=False)
            if any(_is_under(dp, ex) for ex in ex_dirs) or _should_exclude_dir_by_name(d):
                continue
            kept.append(d)
        dirs[:] = kept

        for fname in sorted(files, key=str.lower):
            fp = (curr / fname).resolve(strict=False)
            if fp.is_symlink():
                continue
            if fp in ex_files:
                continue
            if any(_is_under(fp, ex) for ex in ex_dirs):
                continue
            try:
                if not _should_include_file(fp):
                    continue
            except Exception:
                continue
            yield fp

def _make_dump_path(root: Path) -> Path:
    script_dir = Path(__file__).resolve().parent
    fname = f"dump_webcontext_{root.name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
    return script_dir / fname

def _write_header(fh, root: Path, ex_dirs: Set[Path], ex_files: Set[Path]) -> None:
    fh.write(f"ROOT: {root}\n")
    fh.write("Relevance rules:\n")
    fh.write(f"  INCLUDE_EXTS: {', '.join(sorted(INCLUDE_EXTS))}\n")
    fh.write(f"  AUTO_EXCLUDE_DIR_NAMES: {', '.join(sorted(AUTO_EXCLUDE_DIR_NAMES))}\n")
    fh.write(f"  AUTO_EXCLUDE_EXTS: {', '.join(sorted(AUTO_EXCLUDE_EXTS))}\n")
    fh.write(f"  EXTRA_AUTO_EXCLUDE_EXTS: {', '.join(sorted(EXTRA_AUTO_EXCLUDE_EXTS)) or '-'}\n")
    fh.write(f"  EXTRA_AUTO_EXCLUDE_BASENAMES: {', '.join(sorted(EXTRA_AUTO_EXCLUDE_BASENAMES)) or '-'}\n")
    fh.write(f"  ALWAYS_INCLUDE_BASENAMES: {', '.join(sorted(ALWAYS_INCLUDE_BASENAMES))}\n")
    fh.write(f"\nSettings: PRINT_TREE={PRINT_TREE}, PRINT_CONTENT={PRINT_CONTENT}, HEAD_BYTES={HEAD_BYTES}, TAIL_BYTES={TAIL_BYTES}\n")
    fh.write("\nExplicit excludes (resolved):\n")
    for p in sorted(ex_dirs, key=str):
        fh.write(f"  [DIR]  {p}\n")
    for p in sorted(ex_files, key=str):
        fh.write(f"  [FILE] {p}\n")
    fh.write("\n")

def _write_tree(fh, root: Path, files: list[Path]) -> None:
    fh.write("=" * 80 + "\n")
    fh.write("HIERARCHIE (pouze zahrnuté soubory a jejich nadřazené složky)\n")
    fh.write("=" * 80 + "\n")
    root = root.resolve(strict=False)

    dir_children: dict[Path, dict[str, set[str]]] = {}
    for fp in files:
        d = fp.parent
        while True:
            dir_children.setdefault(d, {"dirs": set(), "files": set()})
            if d == root:
                break
            d = d.parent

    for fp in files:
        parent = fp.parent
        dir_children.setdefault(parent, {"dirs": set(), "files": set()})
        dir_children[parent]["files"].add(fp.name)
        d = parent
        while d != root:
            dir_children.setdefault(d.parent, {"dirs": set(), "files": set()})
            dir_children[d.parent]["dirs"].add(d.name)
            d = d.parent

    def walk(d: Path, prefix: str = ""):
        names_dirs = sorted(dir_children.get(d, {"dirs": set()})["dirs"], key=str.lower)
        names_files = sorted(dir_children.get(d, {"files": set()})["files"], key=str.lower)
        entries = [("dir", name) for name in names_dirs] + [("file", name) for name in names_files]

        if d == root:
            fh.write(f"{root} (root)\n")

        for i, (kind, name) in enumerate(entries):
            is_last = (i == len(entries) - 1)
            connector = "└── " if is_last else "├── "
            suffix = "/" if kind == "dir" else ""
            fh.write(prefix + connector + name + suffix + "\n")
            if kind == "dir":
                sub = d / name
                new_prefix = prefix + ("    " if is_last else "│   ")
                walk(sub, new_prefix)

    walk(root)
    fh.write("\n")

def _head_tail_text(data: bytes) -> str:
    n = len(data)
    if n <= HEAD_BYTES + TAIL_BYTES or (HEAD_BYTES == 0 and TAIL_BYTES == 0):
        return data.decode("utf-8", errors="replace")
    head = data[:HEAD_BYTES].decode("utf-8", errors="replace")
    tail = data[-TAIL_BYTES:].decode("utf-8", errors="replace")
    middle = f"\n<<<TRUNCATED: vypsáno {HEAD_BYTES}+{TAIL_BYTES} z {n} bajtů>>>\n"
    return head + middle + tail

BOOK_VAR_RE = re.compile(
    r"(var\s+book\s*=\s*)(\{.*?\})(\s*;\s*)",
    flags=re.DOTALL | re.IGNORECASE,
)

def _summarize_inline_book(html_text: str) -> tuple[str, str | None]:
    m = BOOK_VAR_RE.search(html_text)
    if not m:
        return html_text, None
    json_raw = m.group(2)
    info = None
    try:
        book = json.loads(json_raw)
        slots = book.get("slots", [])
        def iter_urls(obj):
            if isinstance(obj, dict):
                for _, v in obj.items():
                    if isinstance(v, (dict, list)):
                        yield from iter_urls(v)
                    elif isinstance(v, str) and ("/" in v or v.lower().endswith((".png",".jpg",".jpeg",".svg",".webm",".ogg",".mp3",".mp4"))):
                        yield v
            elif isinstance(obj, list):
                for it in obj:
                    yield from iter_urls(it)
        urls = list(iter_urls(book))
        info = f"[BOOK_JSON_EMBEDDED] slots={len(slots)}, urls={len(set(urls))}"
    except Exception:
        info = "[BOOK_JSON_EMBEDDED] (nelze parsovat – ponechán jen zástupný text)"
    replacement = m.group(1) + '"/* ' + (info or "BOOK") + ' */"' + m.group(3)
    new_html = html_text[:m.start()] + replacement + html_text[m.end():]
    return new_html, info

def _summarize_book_json(text: str) -> str:
    try:
        obj = json.loads(text)
    except Exception:
        return text
    slots = obj.get("slots", [])
    def iter_urls(o):
        if isinstance(o, dict):
            for _, v in o.items():
                if isinstance(v, (dict, list)):
                    yield from iter_urls(v)
                elif isinstance(v, str) and ("/" in v or v.lower().endswith((".png",".jpg",".jpeg",".svg",".webm",".ogg",".mp3",".mp4"))):
                    yield v
        elif isinstance(o, list):
            for it in o:
                yield from iter_urls(it)
    urls = list(iter_urls(obj))
    meta = {
        "type": obj.get("type"),
        "slots_count": len(slots),
        "unique_urls": len(set(urls)),
        "options_keys": sorted(list(obj.get("options", {}).keys())),
    }
    preview = text[:min(len(text), HEAD_BYTES if HEAD_BYTES else 512)]
    return (
        "<<<BOOK.JSON SUMMARY>>>\n"
        + json.dumps(meta, ensure_ascii=False, indent=2)
        + "\n<<<BOOK.JSON PREVIEW (truncated)>>>\n"
        + preview
        + ("\n<<<…>>>\n" if len(text) > len(preview) else "\n")
    )

def _summarize_files_mapping(text: str) -> str:
    try:
        obj = json.loads(text)
        items = list(obj.items())
        n = len(items)
        sample = items[: min(10, n)]
        formatted = "\n".join(f"  - {k} -> {v}" for k, v in sample)
        return f"<<<FILES MAPPING>>>\nitems_total={n}\nexamples:\n{formatted}\n"
    except Exception:
        return text

def _write_file_contents(fh, root: Path, files: list[Path]) -> None:
    fh.write("=" * 80 + "\n")
    fh.write("OBSAH SOUBORŮ (zkráceně: head+tail; speciální souhrny pro index.html/book.json/files)\n")
    fh.write("=" * 80 + "\n\n")

    root_res = root.resolve(strict=False)
    shown = 0

    for f in files:
        if MAX_FILES_IN_CONTENT is not None and shown >= MAX_FILES_IN_CONTENT:
            fh.write(f"[INFO] Limit MAX_FILES_IN_CONTENT={MAX_FILES_IN_CONTENT} dosažen, další soubory přeskočeny.\n")
            break

        try:
            st = f.stat(follow_symlinks=False)
        except Exception:
            continue

        try:
            with f.open("rb") as rf:
                data = rf.read(min(st.st_size, MAX_TEXT_BYTES_PER_FILE))
        except Exception:
            continue

        is_bin = _is_probably_binary(data[:2048])

        try:
            rel = f.resolve(strict=False).relative_to(root_res)
        except Exception:
            rel = f

        fh.write("-" * 80 + "\n")
        fh.write(f"SOUČÁST: {rel}\n")
        fh.write(f"CESTA:    {f}\n")
        fh.write(f"VELIKOST: {st.st_size} B ({human_size(st.st_size)})\n")
        fh.write(f"TYP:      {'binární (přeskočeno)' if is_bin else 'textový'}\n")
        fh.write("-" * 80 + "\n")

        if is_bin:
            fh.write("[PŘESKOČENO] Detekováno jako binární.\n\n")
            continue

        name = f.name.lower()
        ext  = f.suffix.lower()

        # Metriky pro textové soubory
        total_lines = count_lines_from_bytes(data)
        file_hash   = sha256_bytes(data)

        # Soubor patří mezi „bez obsahu“ → vytiskni jen metriky
        if (ext in SKIP_CONTENT_EXTS) or (name in SKIP_CONTENT_BASENAMES):
            fh.write(f"[METRICS] lines={total_lines}, sha256={file_hash}\n\n")
            shown += 1
            continue

        text = data.decode("utf-8", errors="replace")

        # Speciální soubory:
        if SUMMARIZE_INDEX_INLINE_BOOK and name == "index.html":
            new_html, info = _summarize_inline_book(text)
            if info:
                fh.write(f"[INFO] index.html: inline book nahrazen souhrnem: {info}\n")
            fh.write("<<<BEGIN TEXT (truncated head+tail)>>>\n")
            fh.write(_head_tail_text(new_html.encode("utf-8")))
            fh.write("<<<END TEXT>>>\n\n")
        elif SUMMARIZE_BOOK_JSON and name == "book.json":
            fh.write(_summarize_book_json(text))
            fh.write("\n")
        elif SUMMARIZE_FILES_MAPPING and name == "files":
            fh.write(_summarize_files_mapping(text))
            fh.write("\n")
        else:
            fh.write("<<<BEGIN TEXT (truncated head+tail)>>>\n")
            fh.write(_head_tail_text(data))
            fh.write("<<<END TEXT>>>\n\n")

        shown += 1

def main() -> None:
    root = Path(ROOT_DIR).expanduser()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"[ERROR] ROOT_DIR neexistuje nebo není složka: {root}")

    ex_dirs, ex_files = _resolve_explicits(root, EXPLICIT_EXCLUDES)
    files = list(_iter_included_files(root, ex_dirs, ex_files))

    out_path = _make_dump_path(root)
    try:
        with out_path.open("w", encoding="utf-8", newline="\n") as fh:
            _write_header(fh, root, ex_dirs, ex_files)
            if PRINT_TREE:
                _write_tree(fh, root, files)
            if PRINT_CONTENT:
                _write_file_contents(fh, root, files)
    except Exception as e:
        raise SystemExit(f"[ERROR] Zápis dumpu selhal: {e}")

    print(f"[OK] Dump vytvořen: {out_path}")
    print(f"Počet zahrnutých souborů: {len(files)}")
    by_ext = {}
    for f in files:
        by_ext.setdefault(f.suffix.lower(), 0)
        by_ext[f.suffix.lower()] += 1
    top = sorted(by_ext.items(), key=lambda kv: (-kv[1], kv[0]))
    print("Top přípony:", ", ".join(f"{ext or '<bez_ext>'}:{cnt}" for ext, cnt in top[:10]))

if __name__ == "__main__":
    main()
