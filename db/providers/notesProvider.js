import Note from "../../models/notes";

const read = async () => {
  //return empty array
  // await logger.info(res.status(200).send([]));
  //return all notes
  const limitNumber = 10;
  //title: mouse, tiger, cat
  const note = await Note.find({ title: "cat" }, {})
    .sort({ _id: 1 })
    .limit(limitNumber);

  return note;
};

const create = async (note) => {
  const noteCreate = await Note.create(note);
  return noteCreate;
};

//new: true, return version note by id
const update = async (note) => {
  if (!note._id) {
    throw new Error("no ID");
  }

  const updatePut = await Note.findByIdAndUpdate(note._id, note, {
    new: true,
  });
  return updatePut;
};

const del = async (id) => {
  if (!id) {
    throw new Error("no ID");
  }
  const note = await Note.findByIdAndDelete(id);
  return note;
};

export const notesDB = {
  read,
  create,
  update,
  del,
};
