import express from "express";
import { direct } from "../../../config/direct";

const router = express.Router();

router.get("/", direct.getNotes)

router.post("/", direct.createOneNote );

router.put("/:id", direct.updateOneNote);

router.delete("/:id", direct.deleteOneNotes);

export default router;
