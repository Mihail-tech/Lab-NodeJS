import express from "express";
import greeting from "../greetingName";

const router = express.Router();

/* GET home page. */
router.get("/", greeting);

export default router;
