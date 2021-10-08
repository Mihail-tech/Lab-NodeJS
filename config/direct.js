import { createOneNote } from "../modules/notes/controllers/createNotes";
import { deleteOneNotes } from "../modules/notes/controllers/deleteNotes";
import { getNotes } from "../modules/notes/controllers/getNotes";
import { updateOneNote } from "../modules/notes/controllers/updateNotes";

export const direct = {
    getNotes,
    createOneNote,
    updateOneNote,
    deleteOneNotes
}