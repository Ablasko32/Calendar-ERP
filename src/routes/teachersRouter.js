import express from "express";
import {
  getTeacherPage,
  addNewTeacher,
  deleteTeacher,
  editTeacher,
  postEditTeacher,
} from "../controllers/teacherController.js";

const teacherRouter = express.Router();

teacherRouter.get("/teachers", getTeacherPage);

teacherRouter.post("/teachers", addNewTeacher);

teacherRouter.get("/teacher/del/:id", deleteTeacher);

teacherRouter.get("/teacher/edit/:id", editTeacher);

teacherRouter.post("/teacher/edit", postEditTeacher);

export default teacherRouter;
