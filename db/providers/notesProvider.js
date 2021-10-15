import dotenv from "dotenv";

import Note from "../../models/notes";
import { LIMIT_NUMBER } from "../../config/constants";
import { postfix } from "../../utils/environment";

dotenv.config();

export const getNote = async () => {
  const note = await Note.find({ title: "tiger", description: "animal" })
    .sort({ _id: 1 })
    .limit(LIMIT_NUMBER);
  return note;
};

export const createNote = async (note) => {
  note.title = postfix(note.title);
  const noteCreate = await Note.create(note);
  return noteCreate;
};

export const updateNote = async (note) => {
  if (!note._id) {
    throw new Error("no ID");
  }

  const update = await Note.findByIdAndUpdate(note._id, note, {
    new: true,
  });
  return update;
};

export const deleteNote = async (id) => {
  if (!id) {
    throw new Error("no ID");
  }
  const note = await Note.findByIdAndDelete(id);
  return note;
};
