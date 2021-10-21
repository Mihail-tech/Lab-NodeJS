import { createOneNote } from "./createNotes";
import { deleteOneNote } from "./deleteNotes";
import { getListNotes } from "./getNotes";
import { updateOneNote } from "./updateNotes";

export const direct = {
    getListNotes,
    createOneNote,
    updateOneNote,
    deleteOneNote
}