import db from "../config/database.js";

const loadHomePage = async (req, res) => {
  try {
    const numStudents = await db.query("SELECT COUNT(*) FROM students");
    const numTeachers = await db.query("SELECT COUNT(*) FROM teachers");
    const numClasses = await db.query("SELECT COUNT(*) FROM events");

    res.render("home.ejs", {
      studentNum: numStudents.rows[0].count,
      classNum: numClasses.rows[0].count,
      teacherNum: numTeachers.rows[0].count,
    });
  } catch (err) {
    console.log(err);
  }
};

export { loadHomePage };
