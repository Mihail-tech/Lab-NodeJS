import express, { json } from "express";
import { notesDelete } from "../controllers/deleteNotes";
import { notesGet } from "../controllers/getNotes";
import { notesPost } from "../controllers/postNotes";
import { notesPut } from "../controllers/updateNotes";

const router = express.Router();

//get
//read note
router.get("/", notesGet.getNotes);
// //post
// //create note
router.post("/", notesPost.postNotes);

// //put
// //update note
router.put("/:id", notesPut.putNotes);

// //delete
// //delete chose id
router.delete("/:id", notesDelete.deleteNotes);

export default router;
