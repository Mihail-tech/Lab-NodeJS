import { deleteNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const deleteOneNote = async (req, res) => {
  try {
    const noteDeleted = await deleteNote(req.params.id)
    return logger.info(res.status(201).json(noteDeleted, { success: true, id: id }));
  } catch (e) {
    logger.error(res.status(500).json(e.message));
  }
};
