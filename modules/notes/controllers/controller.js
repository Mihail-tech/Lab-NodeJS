// import logger from "../../../utils/logger";
// import Note from "../../../models/notes";

// class Controller {
//   async read(req, res) {
//     try {
//       //return empty array
//       // await logger.info(res.status(200).send([]));
//       //return all notes
//       const limitNumber = 10;
//       const pagination = {
//         page: parseInt(req.query.page, limitNumber) || 0,
//         limit: parseInt(req.query.limit, limitNumber) || limitNumber,
//       };
//       //title: mouse, tiger, cat
//       const note = await Note.find({title: 'mouse'}, {})
//         .sort({_id: 1})
//         .skip(pagination.page * pagination.limit)
//         .limit(pagination.limit)
//       return logger.info(res.json(note));
//     } catch (e) {
//       logger.error(res.status(500).json(e));
//     }
//   }

//   async create(req, res) {
//     try {
//       const { title, content, timestamps } = req.body;
//       const note = await Note.create({ title, content, timestamps });
//       return logger.info(res.status(201).json(note));
//     } catch (e) {
//       logger.error(res.status(500).json(e));
//     }
//   }
//   //new: true, return version note by id
//   async update(req, res) {
//     try {
//       const note = req.body;
//       if (!note._id) {
//         logger.error(res.status(400).json({ message: "нет ID" }));
//       }
//       const update = await Note.findByIdAndUpdate(note._id, note, {
//         new: true,
//       });
//       return logger.info(res.status(200).json(update));
//     } catch (e) {
//       logger.error(res.status(500).json(e));
//     }
//   }

//   async delete(req, res) {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         logger.error(res.status(400).json({ message: "нет ID" }));
//       }
//       await Note.findByIdAndDelete(id);
//       return logger.info(res.status(201).json({ success: true, id: id }));
//     } catch (e) {
//       logger.error(res.status(500).json(e));
//     }
//   }
// }

// export default new Controller();
