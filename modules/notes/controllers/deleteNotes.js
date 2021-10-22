import { deleteNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";

export const deleteOneNote = async (req, res) => {
  try {
    const {id} = req.params;
    const noteDeleted = await deleteNote(id)
    return logger.info(res.status(200).json({noteDeleted:`${noteDeleted}`, success: true, id: id }));
  } catch (e) {
    logger.error(res.status(500).json(e.message));
  }
};
