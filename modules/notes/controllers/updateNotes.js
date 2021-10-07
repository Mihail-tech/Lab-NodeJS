import { notesDB } from "../../../db/providers/notesProvider.js";
import logger from "../../../utils/logger.js";


// new: true, return version note by id
 export  const putNotes = async(req, res) => {
    try {
      
      const update = await notesDB.update(req.body);
      return logger.info(res.status(200).json(update));
    } catch (e) {
     logger.error(res.status(500).json(e));
    }
  }