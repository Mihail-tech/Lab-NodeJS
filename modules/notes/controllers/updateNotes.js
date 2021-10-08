import { updateNote } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";


 export  const updateOneNote = async(req, res) => {
    try {
      const noteUpdate = await updateNote(req.body);
      return logger.info(res.status(200).json(noteUpdate));
    } catch (e) {
     logger.error(res.status(500).json(e));
    }
  }