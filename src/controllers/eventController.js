import db from "../config/database.js";

// fetch all events from database
const getAllEvents = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM events");

    result.rows.map((event) => {
      event.start = event.start_time;
      event.end = event.end_time;
      delete event.start_time;
      delete event.end_time;
    });
    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
};

// add new event to database
const addNewEvent = async (req, res) => {
  const { title, start_time, end_time } = req.body;
  try {
    await db.query(
      "INSERT INTO events(title,start_time,end_time) VALUES($1,$2,$3)",
      [title, start_time, end_time]
    );
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
};

export { addNewEvent, getAllEvents };
