import express from "express";
import {
  getTeacherPage,
  addNewTeacher,
} from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/teachers", getTeacherPage);

teacherRouter.post("/teachers", addNewTeacher);

export default teacherRouter;
