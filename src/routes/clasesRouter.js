import express from "express";
import {
  getClassPage,
  editClass,
  postEditClass,
  deleteClass,
} from "../controllers/classController.js";

const classRouter = express.Router();

classRouter.get("/classes", getClassPage);

classRouter.get("/classes/del/:id", deleteClass);

classRouter.get("/classes/edit/:id", editClass);

classRouter.post("/classes/edit/", postEditClass);

export default classRouter;
