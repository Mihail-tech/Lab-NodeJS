import { getNotes } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const getListNotes = async (req, res) => {
  const filter = {};
  if (req.query.title) {
    filter.title = req.query.title;
  }

  if (req.query.description) {
    filter.description = req.query.description;
  }

  try {
    const note = await getNotes({ filter });
    return logger.info(res.json(note));
  } catch (e) {
    logger.error(res.status(500).json(e.message));
  }
};