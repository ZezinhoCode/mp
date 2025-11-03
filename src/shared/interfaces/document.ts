export interface IDocument {
  id: string;
  name: string;
  type: "file" | "link";
  url?: string;
}
