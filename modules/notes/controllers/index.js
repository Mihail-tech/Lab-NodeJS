import { createOneNote } from "./createNotes";
import { deleteOneNote } from "./deleteNotes";
import { getNotes } from "./getNotes";
import { updateOneNote } from "./updateNotes";

export const direct = {
    getNotes,
    createOneNote,
    updateOneNote,
    deleteOneNote
}