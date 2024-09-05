import express from "express";
import { loadIndexPage } from "../controllers/indexController.js";

const indexRouter = express.Router();

indexRouter.get("/", loadIndexPage);

export default indexRouter;
