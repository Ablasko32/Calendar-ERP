import express from "express";

const eventRouter = express.Router();

// get events
eventRouter.get("/events", (req, res) => {
  res.send("Getting all events");
});

// create event
eventRouter.post("/event", (req, res) => {
  console.log("hitting event");
  console.log(req.body);
});

export default eventRouter;
