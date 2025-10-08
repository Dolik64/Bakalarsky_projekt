#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Druhý skript: vytvoří dump „důležitých“ souborů webové appky
- Sám excluduje nerelevantní věci (obrázky, videa, binárky, zálohy, obří soubory, buildy…)
- Zároveň respektuje EXPLICIT_EXCLUDES (tvé pevné cesty).
- Výstup: stromová hierarchie + obsah zahrnutých souborů (textově, binárky se stejně nezahrnují).

Spusť bez argumentů.
"""

from __future__ import annotations
import os
from pathlib import Path
from datetime import datetime
from typing import Iterable, Set, Tuple

# === ▼ UPRAV TADY ▼ ==========================================================

# Kořen projektu:
#ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook"
ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_-_Entwicklungsgeschichte"

# Tvoje explicitní vyloučení:
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

# Automatická pravidla: co VYLOUČIT (adresáře dle názvu, přípony, atd.)
AUTO_EXCLUDE_DIR_NAMES = {
    "images", "image", "img", "media", "video", "videos", "voice", "voices", "audio",
    "zaloha", "backup", "backups", "tmp", "temp", "cache", ".git", ".svn",
    "node_modules", "dist", "build", ".venv", "__pycache__",
}

AUTO_EXCLUDE_EXTS = {
    # obrázky
    ".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".tiff", ".ico", ".svgz",
    # video
    ".mp4", ".mkv", ".avi", ".mov", ".wmv", ".flv", ".webm", ".m4v",
    # audio
    ".mp3", ".wav", ".aac", ".ogg", ".flac", ".m4a",
    # archivy / binárky
    ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2", ".xz",
    ".exe", ".dll", ".so", ".dylib", ".bin", ".dat", ".pak",
    # fonty (typicky pro kontext kódu nejsou nutné)
    ".woff", ".woff2", ".ttf", ".otf", ".eot",
    # další těžké/binary
    ".pdf", ".iso", ".dmg",
}

# Automatická pravidla: co NAOPAK ZAHRNOUT (klíčové pro logiku webu)
INCLUDE_EXTS = {
    ".html", ".htm", ".css", ".js", ".mjs", ".cjs", ".json", ".map",
    ".txt", ".md", ".ini", ".cfg", ".conf", ".env", ".yml", ".yaml",
    ".csv", ".tsv", ".xml", ".svg",  # SVG často nese „kódový“ kontext
}

# Doplňkové „vždy zahrnout“ podle názvu (bez ohledu na příponu)
ALWAYS_INCLUDE_BASENAMES = {
    "README", "LICENSE", "index.html", "index.htm", "book.json", "wow.json",
    "connector.js", "logging.js", "RUNeScrapBook", "RUNeScrapBook.bat",
}

# Limity
MAX_TEXT_BYTES_PER_FILE = 1_000_000   # 1 MB – při dumpu obsahu
MAX_FALLBACK_TEXT_SIZE = 128_000      # 128 kB – když přípona nepomůže, zahrneme malé textové soubory
# === ▲ UPRAV TADY ▲ ==========================================================


def human_size(num_bytes: int) -> str:
    units = ["B", "KB", "MB", "GB", "TB", "PB"]
    size = float(num_bytes)
    for u in units:
        if size < 1024 or u == units[-1]:
            return f"{size:.2f} {u}"
        size /= 1024


def _is_probably_binary(sample: bytes) -> bool:
    if b"\x00" in sample:
        return True
    textlike = sum(32 <= b <= 126 or b in (9, 10, 13) for b in sample)
    return (len(sample) - textlike) / max(1, len(sample)) > 0.30


def _resolve_explicits(root: Path, explicit: Iterable[str]) -> Tuple[Set[Path], Set[Path]]:
    ex_dirs: Set[Path] = set()
    ex_files: Set[Path] = set()
    for raw in explicit:
        if not raw:
            continue
        p = Path(raw)
        if not p.is_absolute():
            p = root / p
        rp = p.resolve(strict=False)
        if rp.exists():
            if rp.is_dir():
                ex_dirs.add(rp)
            else:
                ex_files.add(rp)
    return ex_dirs, ex_files


def _should_exclude_dir_by_name(dirname: str) -> bool:
    return dirname.lower() in AUTO_EXCLUDE_DIR_NAMES


def _should_include_file(file: Path) -> bool:
    name = file.name
    if name in ALWAYS_INCLUDE_BASENAMES:
        return True
    ext = file.suffix.lower()
    if ext in INCLUDE_EXTS:
        return True
    if ext in AUTO_EXCLUDE_EXTS:
        return False
    # Fallback: pokud je soubor malý a vypadá textově, zahrň ho (užitečné pro .log apod.)
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


def _iter_included_files(root: Path, explicit_ex_dirs: Set[Path], explicit_ex_files: Set[Path]) -> Iterable[Path]:
    root = root.resolve(strict=False)
    for curr_dir, dirs, files in os.walk(root, topdown=True, followlinks=False):
        curr = Path(curr_dir)

        # Prune adresářů: explicitní + podle názvu
        pruned = []
        kept = []
        for d in dirs:
            dp = (curr / d).resolve(strict=False)
            if any(_is_under(dp, ex) for ex in explicit_ex_dirs) or _should_exclude_dir_by_name(d):
                pruned.append(d)
            else:
                kept.append(d)
        dirs[:] = sorted(kept, key=str.lower)

        # Soubory
        for fname in sorted(files, key=str.lower):
            fp = (curr / fname).resolve(strict=False)
            if fp.is_symlink():
                continue
            # explicitní file exclude
            if fp in explicit_ex_files:
                continue
            # když je pod explicitně vyloučenou složkou, přeskoč
            if any(_is_under(fp, ex) for ex in explicit_ex_dirs):
                continue
            # pravidla přípon / fallback text
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
    fh.write(f"  ALWAYS_INCLUDE_BASENAMES: {', '.join(sorted(ALWAYS_INCLUDE_BASENAMES))}\n")
    fh.write("\nExplicit excludes (resolved):\n")
    for p in sorted(ex_dirs, key=str):
        fh.write(f"  [DIR]  {p}\n")
    for p in sorted(ex_files, key=str):
        fh.write(f"  [FILE] {p}\n")
    fh.write("\n")


def _write_tree(fh, root: Path, files: list[Path], ex_dirs: Set[Path], ex_files: Set[Path]) -> None:
    fh.write("=" * 80 + "\n")
    fh.write("HIERARCHIE (pouze zahrnuté soubory a jejich nadřazené složky)\n")
    fh.write("=" * 80 + "\n")
    root = root.resolve(strict=False)

    # Poskládej mapu složek -> položky (dirs/files) jen pro zahrnuté cesty
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
        # označte i dirs po cestě
        d = parent
        while d != root:
            dir_children.setdefault(d.parent, {"dirs": set(), "files": set()})
            dir_children[d.parent]["dirs"].add(d.name)
            d = d.parent

    def walk(d: Path, prefix: str = ""):
        # dirs a files seřadit
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


def _write_file_contents(fh, root: Path, files: list[Path]) -> None:
    fh.write("=" * 80 + "\n")
    fh.write("OBSAH SOUBORŮ (pouze zahrnuté; textově, s limitem na velikost)\n")
    fh.write("=" * 80 + "\n\n")

    root_res = root.resolve(strict=False)

    for f in files:
        try:
            st = f.stat(follow_symlinks=False)
        except Exception:
            continue

        # text vs. binární heuristika (binární se sem obvykle nedostanou, ale kdyby)
        try:
            with f.open("rb") as rf:
                sample = rf.read(2048)
        except Exception:
            continue

        is_bin = _is_probably_binary(sample)

        rel = f
        try:
            rel = f.resolve(strict=False).relative_to(root_res)
        except Exception:
            pass

        fh.write("-" * 80 + "\n")
        fh.write(f"SOUČÁST: {rel}\n")
        fh.write(f"CESTA:    {f}\n")
        fh.write(f"VELIKOST: {st.st_size} B ({human_size(st.st_size)})\n")
        fh.write(f"TYP:      {'binární (přeskočeno)' if is_bin else 'textový'}\n")
        fh.write("-" * 80 + "\n")

        if is_bin:
            fh.write("[PŘESKOČENO] Detekováno jako binární.\n\n")
            continue

        # čtení s limitem
        to_read = min(st.st_size, MAX_TEXT_BYTES_PER_FILE)
        try:
            with f.open("rb") as rf:
                data = rf.read(to_read)
        except Exception:
            fh.write("[CHYBA] Nelze číst soubor.\n\n")
            continue

        text = data.decode("utf-8", errors="replace")
        fh.write("<<<BEGIN TEXT>>>\n")
        fh.write(text)
        if not text.endswith("\n"):
            fh.write("\n")
        if st.st_size > to_read:
            fh.write(f"<<<TRUNCATED: vypsáno {to_read} z {st.st_size} bajtů>>>\n")
        fh.write("<<<END TEXT>>>\n\n")


def main() -> None:
    root = Path(ROOT_DIR).expanduser()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"[ERROR] ROOT_DIR neexistuje nebo není složka: {root}")

    ex_dirs, ex_files = _resolve_explicits(root, EXPLICIT_EXCLUDES)

    # Vyber zahrnuté soubory dle pravidel
    files = list(_iter_included_files(root, ex_dirs, ex_files))

    out_path = _make_dump_path(root)
    try:
        with out_path.open("w", encoding="utf-8", newline="\n") as fh:
            _write_header(fh, root, ex_dirs, ex_files)
            _write_tree(fh, root, files, ex_dirs, ex_files)
            _write_file_contents(fh, root, files)
    except Exception as e:
        raise SystemExit(f"[ERROR] Zápis dumpu selhal: {e}")

    print(f"[OK] Dump vytvořen: {out_path}")
    print(f"Počet zahrnutých souborů: {len(files)}")
    # Shrnutí dle typu přípon
    by_ext = {}
    for f in files:
        by_ext.setdefault(f.suffix.lower(), 0)
        by_ext[f.suffix.lower()] += 1
    top = sorted(by_ext.items(), key=lambda kv: (-kv[1], kv[0]))
    print("Top přípony:", ", ".join(f"{ext or '<bez_ext>'}:{cnt}" for ext, cnt in top[:10]))


if __name__ == "__main__":
    main()
