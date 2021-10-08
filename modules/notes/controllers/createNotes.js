import { createNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const createOneNote = async (req, res) => {
  try {
    const { title, content, timestamps } = req.body;
    const note = await createNote({ title, content, timestamps });
    return logger.info(res.status(201).json(note));
  } catch (e) {
    logger.error(res.status(500).json(e));
  }
};
