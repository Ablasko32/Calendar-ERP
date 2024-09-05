import db from "../config/database.js";

const getTeacherPage = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM teachers");

    res.render("teachers.ejs", { teachers: result.rows });
  } catch (err) {
    console.log(err);
  }
};

const addNewTeacher = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const doesTeacherExist = await db.query(
      "SELECT * FROM teachers WHERE email=$1",
      [email]
    );
    if (doesTeacherExist.rows.length === 0) {
      await db.query(
        "INSERT INTO teachers(name,email,phone) VALUES ($1,$2,$3)",
        [name, email, phone]
      );
      res.redirect("/teachers");
    } else {
      console.log("Teacher exists");
    }
  } catch (err) {
    console.log(err);
  }
};

export { getTeacherPage, addNewTeacher };
