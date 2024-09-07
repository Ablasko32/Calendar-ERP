import express from "express";
import {
  getStudentPage,
  addNewStudent,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/students", getStudentPage);

studentRouter.post("/students", addNewStudent);

export default studentRouter;
