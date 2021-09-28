import express from "express";
import Note from "../models/notes";

const router = express.Router();

//get
//read note
router.get("/", async (req, res) => {
  try {
    //return empty array
    await res.status(200).send([]);
    //return all notes
    // const note = await Note.find()
    // return res.json(note)
  } catch (e) {
    res.status(500).json(e);
  }
});

//post
//create note
router.post("/", async (req, res) => {
  try {
    const { title, content, timestamps } = req.body;
    const note = await Note.create({ title, content, timestamps });
    return res.status(201).json(note);
  } catch (e) {
    res.status(500).json(e);
  }
});

//put
//update note
//new: true, return version note by id
router.put("/:id", async (req, res) => {
  try {
    const note = req.body;
    if (!note._id) {
      res.status(400).json({ message: "нет ID" });
    }
    const update = await Note.findByIdAndUpdate(note._id, note, { new: true });
    return res.status(200).json(update);
  } catch (e) {
    res.status(500).json(e);
  }
});

//delete
//delete chose id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "нет ID" });
    }
    await Note.findByIdAndDelete(id);
    return res.status(204).json({ success: true, id: id });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
