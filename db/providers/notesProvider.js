import dotenv from "dotenv";

import Note from "../../models/notes";
import { LIMIT_NUMBER } from "../../config/constants";
import { postfix } from "../../utils/environment";

dotenv.config();

export const getNotes = async ({ filter }) => {
  const notes = await Note.find({ filter }, { set: { isDeleted: false } })
    .sort({ _id: 1 })
    .limit(LIMIT_NUMBER);
  return notes;
};

export const createNote = async (note) => {
  const modifiedNote = {
    ...note,
    title: postfix(note.title),
  };
  const createdNote = await Note.create(modifiedNote);
  return createdNote;
};

export const updateNote = async (note, _id) => {
  if (!note._id) {
    throw new Error("no ID");
  }

  const updatedNote = await Note.findByIdAndUpdate(note._id, note, {
    new: true,
  });
  return updatedNote;
};

export const deleteNote = async (id) => {
  if (!id) {
    throw new Error("no ID");
  }
  const deletedNote = await Note.findByIdAndUpdate(
    { _id: id },
    { $set: { isDeleted: true } },
    {
      new: true,
    }
  );
  return deletedNote;
};
