import Note from "../../models/notes";
import { LIMIT_NUMBER } from "../../setters/getters/calculations/uppercase constant";

export const getNote = async () => {
  const note = await Note.find({ title: "tiger" }, {})
    .sort({ _id: 1 })
    .limit( LIMIT_NUMBER );
    return note;
};

export const createNote = async (note) => {
  const noteCreate = await Note.create(note);
  return noteCreate;
};

export const updateNote = async (note) => {
  if (!note._id) {
    throw new Error("no ID");
  }

  const updatePut = await Note.findByIdAndUpdate(note._id, note, {
    new: true,
  });
  return updatePut;
};

export const deleteNote = async (id) => {
  if (!id) {
    throw new Error("no ID");
  }
  const note = await Note.findByIdAndDelete(id);
  return note;
};