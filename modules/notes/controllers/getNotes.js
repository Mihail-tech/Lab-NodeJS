import { getNotes } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const getListNotes = async (req, res) => {
  const {title, description} = req.query;
  const filter = {};
  if (title) {
    filter.title = title;
  }

  if (description) {
    filter.description = description;
  }

  try {
    const note = await getNotes({ filter });
    return logger.info(res.json(note));
  } catch (e) {
    logger.error(res.status(500).json(e.message));
  }
};