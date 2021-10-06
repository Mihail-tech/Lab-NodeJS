import { notesDB } from "../../../db/providers/notesProvider.js";


// new: true, return version note by id
  const putNotes = async(req, res) => {
    try {
      
      const update = await notesDB.update(req.body);
      return res.status(200).json(update);
    } catch (e) {
      res.status(500).json(e);
    }
  }

export const notesPut = {
    putNotes
}