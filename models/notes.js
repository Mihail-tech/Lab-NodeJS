import mongoose from "mongoose";

const NoteShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3
    },
    content: {
      type: String,
      required: true,
      maxLength: 500,
      minLength: 3
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", NoteShema);
