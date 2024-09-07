import express from "express";
import {
  getTeacherPage,
  addNewTeacher,
  deleteTeacher,
  editTeacher,
} from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/teachers", getTeacherPage);

teacherRouter.post("/teachers", addNewTeacher);

teacherRouter.get("/teacher/del/:id", deleteTeacher);

teacherRouter.get("/teacher/edit/:id", editTeacher);

export default teacherRouter;
