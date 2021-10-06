

import { notesDB } from "../../../db/providers/notesProvider.js";


const getNotes = async(req, res) => {
   try {
    // const limitNumber = 10;
    // const pagination = {
    //   page: parseInt(req.query.page, limitNumber) || 0,
    //   limit: parseInt(req.query.limit, limitNumber) || limitNumber,
    // };
    const note = await notesDB.read()
        // .sort({_id: 1})
    //     .skip(pagination.page * pagination.limit)
    //     .limit(pagination.limit)
      return res.json(note);
   } catch (e) {
    res.status(500).json(e);
   }
};

export const notesGet = {
    getNotes
}