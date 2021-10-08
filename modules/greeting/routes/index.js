import express from "express";
import greeting from "../greetingName";

const router = express.Router();

router.get("/", greeting);

export default router;
