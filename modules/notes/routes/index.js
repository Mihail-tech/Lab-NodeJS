import express from "express";
import { deleteNotes } from "../controllers/deleteNotes";
import { getNotes } from "../controllers/getNotes";
import { postNotes } from "../controllers/createNotes";
import { putNotes } from "../controllers/updateNotes";

const router = express.Router();

//get
//read note
router.get("/", getNotes);
// //post
// //create note
router.post("/", postNotes);

// //put
// //update note
router.put("/:id", putNotes);

// //delete
// //delete chose id
router.delete("/:id", deleteNotes);

export default router;
