import express from "express";
import { direct } from "../controllers";

const router = express.Router();

router.get("/", direct.getNotes)

router.post("/", direct.createOneNote );

router.put("/:id", direct.updateOneNote);

router.delete("/:id", direct.deleteOneNote);

export default router;
