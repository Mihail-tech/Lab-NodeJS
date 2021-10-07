import { notesDB } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const deleteNotes = async (req, res) => {
  try {
    const noteDelet = await note(notesDB.del(id));
    return logger.info(res.status(201).json(noteDelet, { success: true, id: id }));
  } catch (e) {
    logger.error(res.status(500).json(e));
  }
};
