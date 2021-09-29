import Note from "../models/notes";

class Controller {
  async read(req, res) {
    try {
      //return empty array
      await res.status(200).send([]);
      //return all notes
      // const note = await Note.find({ $limit: 10 })
      // return res.json(note)
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const { title, content, timestamps } = req.body;
      const note = await Note.create({ title, content, timestamps });
      return res.status(201).json(note);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  //new: true, return version note by id
  async update(req, res) {
    try {
      const note = req.body;
      if (!note._id) {
        res.status(400).json({ message: "нет ID" });
      }
      const update = await Note.findByIdAndUpdate(note._id, note, {
        new: true,
      });
      return res.status(200).json(update);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
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
  }
}

export default new Controller();
