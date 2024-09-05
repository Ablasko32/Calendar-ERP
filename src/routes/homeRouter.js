import express from "express";
import { loadHomePage } from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/home", loadHomePage);

export default homeRouter;
