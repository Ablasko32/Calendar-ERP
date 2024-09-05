import express from "express";
import { addNewEvent, getAllEvents } from "../controllers/eventController.js";

const eventRouter = express.Router();

// get events
eventRouter.get("/events", getAllEvents);

// create event
eventRouter.post("/event", addNewEvent);

export default eventRouter;
