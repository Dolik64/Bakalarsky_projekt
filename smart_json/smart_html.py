#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
eScrapBook → pevný export (bez přepínačů)
- Uprav jen KONSTANTY níže a stiskni Run v VS Code.
- Vytvoří:
  - pretty.json (hezky formátovaný JSON)
  - outline.md (stromová struktura)
  - types.d.ts (hrubé TypeScript typy)
  - page_summary.csv (shrnutí stránek)

Autor: ChatGPT (GPT-5 Thinking)
"""

from pathlib import Path
from typing import Any, Dict, List, Set, Union
import json
import sys



# ==========================
# KONFIGURACE (UPRAV TADY)
# ==========================
# Cesta k souboru se vstupem: může být JSON NEBO HTML
INPUT_PATH = r"C:\Users\volny\Documents\bakalarsky_projekt\escrapbook\escrapbook\eScrapBook_Takova_normalni_rodinka\book.json"   # ← přepiš! (může být i "page.html")
# Výstupní složka (bude vytvořena)
OUTDIR = r"C:\Users\volny\Documents\bakalarsky_projekt\smart_html\output"

# Pokud je vstup HTML, nastav na True a případně vyplň markery:
FROM_HTML = False
START_MARKER = "var BOOK_CONFIG ="   # pokud netřeba, nech prázdné
END_MARKER   = ";</script>"          # pokud netřeba, nech prázdné
# ==========================


Primitive = Union[str, int, float, bool, None]

def read_file_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="replace")

def try_parse_json(text: str) -> Dict[str, Any]:
    return json.loads(text)

def extract_json_from_html(html_text: str, start_marker: str = None, end_marker: str = None) -> Dict[str, Any]:
    """
    1) Pokud jsou markery, vyřízne substring mezi nimi a zkusí JSON parse.
    2) Jinak (naivně) vezme substring mezi prvním '{' a poslední '}'.
    """
    snippet = None
    if start_marker and end_marker:
        s_idx = html_text.find(start_marker)
        e_idx = html_text.find(end_marker, s_idx + len(start_marker)) if s_idx != -1 else -1
        if s_idx != -1 and e_idx != -1:
            snippet = html_text[s_idx + len(start_marker):e_idx].strip()
        else:
            raise ValueError("Start/End marker nenalezen v HTML. Uprav START_MARKER/END_MARKER.")
    if snippet is None:
        first = html_text.find("{")
        last = html_text.rfind("}")
        if first == -1 or last == -1 or last <= first:
            raise ValueError("Nepodařilo se najít JSON v HTML. Zadej přesné markery.")
        snippet = html_text[first:last+1]

    cleaned = snippet.strip()
    if cleaned.endswith(";"):
        cleaned = cleaned[:-1].strip()
    if not cleaned.startswith("{"):
        brace = cleaned.find("{")
        if brace != -1:
            cleaned = cleaned[brace:]
    rbrace = cleaned.rfind("}")
    if rbrace != -1:
        cleaned = cleaned[:rbrace+1]

    try:
        return try_parse_json(cleaned)
    except json.JSONDecodeError as e:
        raise ValueError(f"Nepodařilo se parse-nout JSON z HTML. Detail: {e}")

def outline_node(node: Dict[str, Any], depth: int = 0) -> List[str]:
    lines: List[str] = []
    ntype = node.get("type")
    options = node.get("options", {})
    slots = node.get("slots", {})
    prefix = "  " * depth + f"- type: {ntype}"
    if isinstance(options, dict) and options:
        show = []
        for k, v in list(options.items())[:6]:
            val = repr(v)
            if len(val) > 60:
                val = val[:57] + "..."
            show.append(f"{k}={val}")
        prefix += f"  [options: {', '.join(show)}]"
    elif isinstance(options, list) and options:
        prefix += f"  [options: list len {len(options)}]"
    lines.append(prefix)

    if isinstance(slots, dict):
        for slot_name, slot_value in slots.items():
            lines.append("  " * (depth+1) + f"slot: {slot_name}")
            if isinstance(slot_value, dict):
                lines.extend(outline_node(slot_value, depth+2))
            else:
                lines.append("  " * (depth+2) + f"(non-dict slot content)")
    elif isinstance(slots, list):
        for i, child in enumerate(slots):
            lines.append("  " * (depth+1) + f"slot[{i}]")
            if isinstance(child, dict):
                lines.extend(outline_node(child, depth+2))
            else:
                lines.append("  " * (depth+2) + f"(non-dict slot content)")
    return lines

def collect_leaf_types(n: Any) -> Set[str]:
    types: Set[str] = set()
    if isinstance(n, dict):
        t = n.get("type")
        s = n.get("slots")
        if s:
            if isinstance(s, dict):
                for v in s.values():
                    types |= collect_leaf_types(v)
            elif isinstance(s, list):
                for v in s:
                    types |= collect_leaf_types(v)
        else:
            if t:
                types.add(t)
    elif isinstance(n, list):
        for v in n:
            types |= collect_leaf_types(v)
    return types

TS_TYPES = """// Auto-generated rough TypeScript types (heuristic)
type Primitive = string | number | boolean | null;

interface BaseNode {
  type: string;
  options?: Record<string, Primitive | Primitive[] | Record<string, any>> | Primitive[];
  slots?: Record<string, Node> | Node[];
}

type Node = BaseNode;

export interface Book extends BaseNode {
  type: "book";
  options?: Primitive[];
  slots: Node[];
}

// Common node kinds observed:
export type BackgroundDecorator = BaseNode & { type: "background-decorator" };
export type InsetDecorator     = BaseNode & { type: "inset-decorator" };
export type SplitLayout        = BaseNode & { type: "split-layout" };
export type GridLayout         = BaseNode & { type: "grid-layout" };
export type Imager             = BaseNode & { type: "imager" };
export type TextThing          = BaseNode & { type: "text-thing" };
export type VideoThing         = BaseNode & { type: "video-thing" };

// TIP: upřesni per-node options dle vlastního schématu.
"""

def build_page_summary(book: Dict[str, Any]) -> List[Dict[str, str]]:
    rows: List[Dict[str, str]] = []
    pages = book.get("slots", [])
    if not isinstance(pages, list):
        return rows
    for idx, page in enumerate(pages):
        row = {
            "page_index": str(idx),
            "page_type": page.get("type", ""),
            "background_image": "",
            "leaf_types": ""
        }
        opts = page.get("options", {})
        if isinstance(opts, dict):
            row["background_image"] = str(opts.get("image", "") or "")
        leafs = collect_leaf_types(page)
        if page.get("type"):
            leafs.discard(page["type"])
        row["leaf_types"] = ", ".join(sorted(leafs))
        rows.append(row)
    return rows

def save_csv(rows: List[Dict[str, str]], out_path: Path) -> None:
    headers = ["page_index", "page_type", "background_image", "leaf_types"]
    lines = [",".join(headers)]
    def esc(v: str) -> str:
        v = v.replace('"', '""')
        if any(c in v for c in [",", "\n", "\r", '"']):
            return f'"{v}"'
        return v
    for r in rows:
        lines.append(",".join(esc(r.get(h, "")) for h in headers))
    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")

def main():
    in_path = Path(INPUT_PATH)
    if not in_path.exists():
        print(f"Chyba: Soubor {in_path} neexistuje.", file=sys.stderr)
        sys.exit(1)

    outdir = Path(OUTDIR)
    outdir.mkdir(parents=True, exist_ok=True)

    text = read_file_text(in_path)

    if FROM_HTML:
        book = extract_json_from_html(
            text,
            start_marker=START_MARKER if START_MARKER else None,
            end_marker=END_MARKER if END_MARKER else None
        )
    else:
        try:
            book = try_parse_json(text)
        except json.JSONDecodeError as e:
            print("Chyba při čtení JSONu. Pokud je to HTML, nastav FROM_HTML=True a případně markery.", file=sys.stderr)
            print(f"Detail: {e}", file=sys.stderr)
            sys.exit(2)

    # pretty.json
    (Path(outdir) / "pretty.json").write_text(
        json.dumps(book, indent=2, ensure_ascii=False),
        encoding="utf-8"
    )

    # outline.md
    outline_lines = outline_node(book)
    outline_md = "# Outline\n" + "\n".join(outline_lines) + "\n"
    (Path(outdir) / "outline.md").write_text(outline_md, encoding="utf-8")

    # types.d.ts
    (Path(outdir) / "types.d.ts").write_text(TS_TYPES, encoding="utf-8")

    # page_summary.csv
    rows = build_page_summary(book)
    save_csv(rows, Path(outdir) / "page_summary.csv")

    print("Hotovo ✅")
    print(f"- {Path(outdir) / 'pretty.json'}")
    print(f"- {Path(outdir) / 'outline.md'}")
    print(f"- {Path(outdir) / 'types.d.ts'}")
    print(f"- {Path(outdir) / 'page_summary.csv'}")

if __name__ == "__main__":
    main()
