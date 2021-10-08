import { getNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const getNotes = async (req, res) => {
  try {
    const note = await getNote();
    return logger.info(res.json(note));
  } catch (e) {
    logger.error(res.status(500).json(e));
  }
};
