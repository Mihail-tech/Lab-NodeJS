import { deleteNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const deleteOneNotes = async (req, res) => {
  try {
    const deletedNote = await deleteNote(req.params.id)
    return logger.info(res.status(201).json(deletedNote, { success: true, id: id }));
  } catch (e) {
    logger.error(res.status(500).json(e.message));
  }
};
