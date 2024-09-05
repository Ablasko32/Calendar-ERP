import express from "express";
import indexRouter from "./routes/indexRouter.js";
import eventRouter from "./routes/eventsRouter.js";
import "./config/config.js";

const app = express();

// Middlewere
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/", eventRouter);

app.listen(process.env.DEFAULT_PORT || 3000, () => {
  console.log("Server runing on localhost port: " + process.env.DEFAULT_PORT);
});
