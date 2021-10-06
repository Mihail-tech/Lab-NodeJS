import { notesDB } from "../../../db/providers/notesProvider.js";


const postNotes = async(req, res) => {
        try {
        //   const { title, content, timestamps } = req.body;
          const note = await notesDB.create(req.body);
          return res.status(201).json(note);
        } catch (e) {
          res.status(500).json(e);
        }
      }


export const notesPost = {
    postNotes
}