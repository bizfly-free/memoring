import type { NoteEntity } from "./domain";

export type MemoItemData = Pick<
  NoteEntity,
  "id" | "title" | "tags" | "content"
>;
