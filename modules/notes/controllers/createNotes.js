import { notesDB } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const postNotes = async (req, res) => {
  try {
    //   const { title, content, timestamps } = req.body;
    const note = await notesDB.create(req.body);
    return logger.info(res.status(201).json(note));
  } catch (e) {
    logger.error(res.status(500).json(e));
  }
};
