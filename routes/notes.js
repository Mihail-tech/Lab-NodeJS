import express from "express";
import controller from "../controller/controller";

const router = express.Router();

//get
//read note
router.get("/", controller.read);

//post
//create note
router.post("/", controller.create);

//put
//update note
router.put("/:id", controller.update);

//delete
//delete chose id
router.delete("/:id", controller.delete);

export default router;
