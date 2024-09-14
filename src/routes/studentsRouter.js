import express from "express";
import {
  getStudentPage,
  addNewStudent,
  deleteStudent,
  editStudent,
  postEditStudent,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/students", getStudentPage);

studentRouter.post("/students", addNewStudent);

studentRouter.get("/students/del/:id", deleteStudent);

studentRouter.get("/students/edit/:id", editStudent);

studentRouter.post("/students/edit", postEditStudent);

export default studentRouter;
