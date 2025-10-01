// Auto-generated rough TypeScript types (heuristic)
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
