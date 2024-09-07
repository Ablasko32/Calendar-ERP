import express from "express";
import { getClassPage } from "../controllers/classController.js";

const classRouter = express.Router();

classRouter.get("/classes", getClassPage);

export default classRouter;
