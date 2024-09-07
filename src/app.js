import express from "express";
import homeRouter from "./routes/homeRouter.js";
import eventRouter from "./routes/eventsRouter.js";
import teacherRouter from "./routes/teachersRouter.js";
import studentRouter from "./routes/studentsRouter.js";
import "./config/config.js";

const app = express();

// Middlewere
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", homeRouter);
app.use("/", eventRouter);
app.use("/", teacherRouter);
app.use("/", studentRouter);

app.listen(process.env.DEFAULT_PORT || 3000, () => {
  console.log("Server runing on localhost port: " + process.env.DEFAULT_PORT);
});
