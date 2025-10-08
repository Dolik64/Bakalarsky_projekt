#!/usr/bin/env python3
"""
Spočítá velikost složky ROOT_DIR s tím, že vynechá vše uvedené v EXCLUDE_PATHS.
- EXCLUDE_PATHS může míchat soubory i složky.
- Položky mohou být relativní (vůči ROOT_DIR) nebo absolutní.
- Neprochází symlinky (kvůli bezpečnosti/rychlosti).
- Běží bez argumentů (jen stisk 'Run').
"""

from __future__ import annotations
import os
from pathlib import Path
from typing import Iterable, Set, Tuple
from datetime import datetime

# === ▼ UPRAV TADY ▼ ==========================================================
# „Makro“ = pevně daná kořenová složka, ve které se bude počítat velikost:
ROOT_DIR = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook"  # např. r"C:\Users\ja\Data" nebo "/home/ja/Data"

# Seznam cest, které se mají VYNECHAT z výpočtu (soubor nebo složka):
EXCLUDE_PATHS = [
   # "2025-01-03 22-16-04.mkv", 
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
    r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\takovanormalnirodinka.jpg",
    
    # příklady:
    # "velky_soubor.mov",            # relativní k ROOT_DIR
    # "cache",                       # celá podsložka "cache"
    # r"/absolutni/cesta/k/souboru", # absolutní cesta k souboru
]
# === ▲ UPRAV TADY ▲ ==========================================================


def human_size(num_bytes: int) -> str:
    """Převod na čitelnou jednotku."""
    units = ["B", "KB", "MB", "GB", "TB", "PB"]
    size = float(num_bytes)
    for u in units:
        if size < 1024 or u == units[-1]:
            return f"{size:.2f} {u}"
        size /= 1024


def resolve_exclusions(root: Path, exclude_paths: Iterable[str]) -> Tuple[Set[Path], Set[Path]]:
    """
    Vrátí dvojici množin (exclude_dirs, exclude_files) – plně *realpath* cesty.
    Neexistující položky ignoruje (jen varovně vypíše).
    """
    exclude_dirs: Set[Path] = set()
    exclude_files: Set[Path] = set()

    for raw in exclude_paths:
        if not raw:
            continue
        p = Path(raw)
        if not p.is_absolute():
            p = (root / p)
        try:
            # resolve(strict=False): nerozbije se na neexistující cestě, ale normalizuje
            rp = p.resolve(strict=False)
        except Exception:
            rp = p

        if rp.exists():
            if rp.is_dir():
                exclude_dirs.add(rp)
            else:
                exclude_files.add(rp)
        else:
            print(f"[INFO] Vynechání: '{rp}' (zatím neexistuje, bude ignorováno, pokud se nenajde při průchodu)")
    return exclude_dirs, exclude_files


def is_within(path: Path, maybe_ancestor: Path) -> bool:
    """True, pokud je 'path' uvnitř (nebo rovno) 'maybe_ancestor'."""
    try:
        path.resolve(strict=False).relative_to(maybe_ancestor.resolve(strict=False))
        return True
    except Exception:
        return False

def find_largest_file_excluding(root: Path, exclude_dirs: Set[Path], exclude_files: Set[Path]) -> Tuple[Path | None, int]:
    """
    Najde největší soubor v 'root' s tím, že respektuje exclude_dirs a exclude_files.
    Vrací dvojici (cesta_souboru_nejvetsiho_nebo_None, velikost_v_bajtech).
    """
    root = root.resolve(strict=False)
    largest_path: Path | None = None
    largest_size: int = -1

    def dir_is_excluded(d: Path) -> bool:
        return any(is_within(d, ex) for ex in exclude_dirs)

    for curr_dir, dirs, files in os.walk(root, topdown=True, followlinks=False):
        curr_path = Path(curr_dir)

        # Ořez vynechaných složek
        dirs[:] = [
            dname
            for dname in dirs
            if not dir_is_excluded((curr_path / dname).resolve(strict=False))
        ]

        for fname in files:
            fpath = (curr_path / fname).resolve(strict=False)

            # Přeskoč explicitně vyloučené soubory nebo soubory uvnitř vyloučených složek
            if fpath in exclude_files or any(is_within(fpath, exd) for exd in exclude_dirs):
                continue

            try:
                if not fpath.is_symlink():
                    size = fpath.stat(follow_symlinks=False).st_size
                else:
                    continue
            except (PermissionError, FileNotFoundError, OSError):
                continue

            if size > largest_size:
                largest_size = size
                largest_path = fpath

    return largest_path, (0 if largest_path is None else largest_size)


def compute_dir_size_excluding(root: Path, exclude_dirs: Set[Path], exclude_files: Set[Path]) -> Tuple[int, int, int]:
    """
    Vrátí (celková_velikost, vynechané_soubory, vynechané_složky_pruned).
    - Prochází top-down, složky v exclude_dirs rovnou ořeže (neprochází dovnitř).
    - Soubory v exclude_files přeskočí při sčítání.
    """
    total: int = 0
    pruned_dirs_count = 0
    skipped_files_count = 0

    root = root.resolve(strict=False)

    # Předpočítej ořez – abychom uměli rychle zjistit, zda složku vynechat
    def dir_is_excluded(d: Path) -> bool:
        for ex in exclude_dirs:
            if is_within(d, ex):
                return True
        return False

    for curr_dir, dirs, files in os.walk(root, topdown=True, followlinks=False):
        curr_path = Path(curr_dir)

        # Pruning: odfiltruj dirs, které spadají do exclude_dirs
        keep_dirs = []
        for dname in dirs:
            dpath = (curr_path / dname).resolve(strict=False)
            if dir_is_excluded(dpath):
                pruned_dirs_count += 1
            else:
                keep_dirs.append(dname)
        dirs[:] = keep_dirs  # in-place úprava pro os.walk

        # Sečti soubory (kromě těch v exclude_files)
        for fname in files:
            fpath = (curr_path / fname).resolve(strict=False)
            # Přeskoč, pokud je to explicitně vynechaný soubor NEBO je uvnitř vynechané složky (pro jistotu)
            if fpath in exclude_files or any(is_within(fpath, exd) for exd in exclude_dirs):
                skipped_files_count += 1
                continue
            try:
                stat = fpath.stat(follow_symlinks=False)
                # Pouze obyčejné soubory:
                if not fpath.is_symlink():
                    total += stat.st_size
            except (PermissionError, FileNotFoundError, OSError):
                # Tiché přeskočení problémových položek
                continue

    return total, skipped_files_count, pruned_dirs_count

def dump_tree_excluding(root: Path, exclude_dirs: Set[Path], exclude_files: Set[Path], out_path: Path | None = None) -> Path:
    """
    Vytvoří textový dump hierarchie složky 'root' s tím, že respektuje exclude_dirs a exclude_files.
    Výstupní soubor vytvoří ve stejném adresáři jako je tento skript (pokud není out_path zadán).
    Vrací cestu k vytvořenému souboru.
    """
    root = root.resolve(strict=False)

    # kam uložit výstup
    script_dir = Path(__file__).resolve().parent
    if out_path is None:
        fname = f"dump_{root.name}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        out_path = script_dir / fname

    def dir_is_excluded(d: Path) -> bool:
        return any(is_within(d, ex) for ex in exclude_dirs)

    lines: list[str] = []
    lines.append(f"{root} (root)")

    def walk(dir_path: Path, prefix: str = "") -> None:
        try:
            entries = list(dir_path.iterdir())
        except (PermissionError, FileNotFoundError, OSError):
            return

        # Filtrování podle výjimek
        filtered: list[tuple[str, Path]] = []
        for e in entries:
            ep = e.resolve(strict=False)
            try:
                is_dir = e.is_dir()
            except (PermissionError, OSError):
                continue

            if is_dir:
                if dir_is_excluded(ep):
                    continue
                filtered.append(("dir", e))
            else:
                # přeskoč explicitně vyloučené soubory nebo soubory uvnitř vyloučených složek
                if ep in exclude_files or any(is_within(ep, exd) for exd in exclude_dirs):
                    continue
                filtered.append(("file", e))

        # Stabilní a přehledné řazení: složky nahoře, pak soubory; abecedně bez ohledu na velikost
        filtered.sort(key=lambda t: (t[0] != "dir", t[1].name.lower()))

        for idx, (kind, entry) in enumerate(filtered):
            is_last = (idx == len(filtered) - 1)
            connector = "└── " if is_last else "├── "
            line = prefix + connector + entry.name + ("/" if kind == "dir" else "")

            if kind == "file":
                try:
                    sz = entry.stat(follow_symlinks=False).st_size
                    line += f"  ({sz} B, {human_size(sz)})"
                except (PermissionError, FileNotFoundError, OSError):
                    pass

            lines.append(line)

            if kind == "dir":
                new_prefix = prefix + ("    " if is_last else "│   ")
                walk(entry, new_prefix)

    walk(root)

    # Uložení
    try:
        out_path.write_text("\n".join(lines), encoding="utf-8")
    except Exception as e:
        raise SystemExit(f"[ERROR] Nepodařilo se zapsat dump do '{out_path}': {e}")

    return out_path

def _is_probably_binary(sample: bytes) -> bool:
    """Hrubé rozpoznání binárního souboru."""
    if b"\x00" in sample:
        return True
    # podíl netisknutelných znaků (mimo běžné whitespace) nad 30 % -> binární
    textlike = sum(32 <= b <= 126 or b in (9, 10, 13) for b in sample)
    return (len(sample) - textlike) / max(1, len(sample)) > 0.30


def append_file_contents_dump(
    root: Path,
    exclude_dirs: Set[Path],
    exclude_files: Set[Path],
    out_path: Path,
    *,
    max_bytes_per_file: int = 1_000_000,   # 1 MB na soubor
    hex_bytes_for_binary: int = 4096       # kolik bajtů vypsat u binárních (hexdump)
) -> None:
    """
    Do existujícího dump souboru 'out_path' připíše obsah všech NEVYLOUČENÝCH souborů.
    - Textové soubory: vypíše text (max max_bytes_per_file, UTF-8 s errors='replace').
    - Binární soubory: hexdump prvních hex_bytes_for_binary bajtů.
    - Zachovává deterministické pořadí (nejdřív složky, pak soubory; abecedně).
    """
    root = root.resolve(strict=False)

    def dir_is_excluded(d: Path) -> bool:
        return any(is_within(d, ex) for ex in exclude_dirs)

    def iter_files() -> Iterable[Path]:
        for curr_dir, dirs, files in os.walk(root, topdown=True, followlinks=False):
            curr_path = Path(curr_dir)

            # prune vynechané složky
            dirs[:] = [
                dname for dname in sorted(dirs, key=str.lower)
                if not dir_is_excluded((curr_path / dname).resolve(strict=False))
            ]

            # soubory: filtr a abecedné řazení
            for fname in sorted(files, key=str.lower):
                fpath = (curr_path / fname).resolve(strict=False)
                if fpath in exclude_files or any(is_within(fpath, exd) for exd in exclude_dirs):
                    continue
                if fpath.is_symlink():
                    continue
                yield fpath

    with out_path.open("a", encoding="utf-8", newline="\n") as fh:
        fh.write("\n")
        fh.write("=" * 80 + "\n")
        fh.write("OBSAH SOUBORŮ (po aplikaci výjimek)\n")
        fh.write("=" * 80 + "\n\n")

        for f in iter_files():
            rel = f
            try:
                rel = f.resolve(strict=False).relative_to(root.resolve(strict=False))
            except Exception:
                pass

            try:
                st = f.stat(follow_symlinks=False)
                size = st.st_size
            except (PermissionError, FileNotFoundError, OSError):
                # přeskoč nečitelné
                continue

            # načtení vzorku pro rozpoznání binárního souboru
            try:
                with f.open("rb") as rf:
                    sample = rf.read(2048)
            except (PermissionError, FileNotFoundError, OSError):
                continue

            is_bin = _is_probably_binary(sample)

            fh.write("-" * 80 + "\n")
            fh.write(f"SOUČÁST: {rel}\n")
            fh.write(f"CESTA:    {f}\n")
            fh.write(f"VELIKOST: {size} B ({human_size(size)})\n")
            fh.write(f"TYP:      {'binární (hexdump)' if is_bin else 'textový'}\n")
            fh.write("-" * 80 + "\n")

            if is_bin:
                # hexdump prvních N bajtů
                to_read = min(size, hex_bytes_for_binary)
                try:
                    with f.open("rb") as rf:
                        data = rf.read(to_read)
                except (PermissionError, FileNotFoundError, OSError):
                    fh.write("[CHYBA] Nelze číst soubor.\n\n")
                    continue

                # formátovaný hexdump (offset: 16 bajtů na řádek)
                for offset in range(0, len(data), 16):
                    chunk = data[offset:offset+16]
                    hex_part = " ".join(f"{b:02x}" for b in chunk)
                    ascii_part = "".join(chr(b) if 32 <= b <= 126 else "." for b in chunk)
                    fh.write(f"{offset:08x}  {hex_part:<47}  |{ascii_part}|\n")

                if size > to_read:
                    fh.write(f"... [zkráceno, soubor má {size} B]\n")
                fh.write("\n")
            else:
                # textový přepis s limitem
                to_read = min(size, max_bytes_per_file)
                try:
                    with f.open("rb") as rf:
                        data = rf.read(to_read)
                except (PermissionError, FileNotFoundError, OSError):
                    fh.write("[CHYBA] Nelze číst soubor.\n\n")
                    continue

                # pokus o UTF-8, případné náhrady
                text = data.decode("utf-8", errors="replace")

                fh.write("<<<BEGIN TEXT>>>\n")
                fh.write(text)
                if not text.endswith("\n"):
                    fh.write("\n")
                if size > to_read:
                    fh.write(f"<<<TRUNCATED: vypsáno {to_read} z {size} bajtů>>>\n")
                fh.write("<<<END TEXT>>>\n\n")


def main() -> None:
    root = Path(ROOT_DIR).expanduser()
    if not root.exists() or not root.is_dir():
        raise SystemExit(f"[ERROR] ROOT_DIR neexistuje nebo to není složka: {root}")

    exclude_dirs, exclude_files = resolve_exclusions(root, EXCLUDE_PATHS)
    total, skipped_files, pruned_dirs = compute_dir_size_excluding(root, exclude_dirs, exclude_files)

    print(f"Kořenová složka: {root}")
    print(f"Vynechané složky: {len(exclude_dirs)} | Vynechané soubory: {len(exclude_files)}")
    print(f"(Během průchodu přeskočeno: {skipped_files} souborů, oříznuto: {pruned_dirs} složek)")
    print("-" * 60)
    print(f"Výsledná velikost (bez vynechaných položek): {total} B ({human_size(total)})")

        # Najdi a vypiš největší soubor (po aplikaci výjimek)
    largest_path, largest_size = find_largest_file_excluding(root, exclude_dirs, exclude_files)
    print("-" * 60)
    if largest_path is None:
        print("Největší soubor: nenalezen (po vynechání nezbyl žádný soubor).")
    else:
        print(f"Největší soubor: {largest_path.name}")
        print(f"Cesta:          {largest_path}")
        print(f"Velikost:       {largest_size} B ({human_size(largest_size)})")

        # Vytvoř textový dump hierarchie (s ohledem na výjimky)
    dump_path = dump_tree_excluding(root, exclude_dirs, exclude_files)
    print("-" * 60)
    print(f"Dump hierarchie vytvořen: {dump_path}")

        # Vytvoř textový dump hierarchie (s ohledem na výjimky)
    dump_path = dump_tree_excluding(root, exclude_dirs, exclude_files)
    print("-" * 60)
    print(f"Dump hierarchie vytvořen: {dump_path}")

    # Připíšeme do stejného souboru i obsah souborů
    append_file_contents_dump(
        root,
        exclude_dirs,
        exclude_files,
        dump_path,
        max_bytes_per_file=1_000_000,  # můžeš upravit dle potřeby
        hex_bytes_for_binary=4096       # můžeš upravit dle potřeby
    )
    print(f"Obsah souborů přidán do: {dump_path}")


if __name__ == "__main__":
    main()
