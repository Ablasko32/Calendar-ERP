import db from "../config/database.js";

const getTeacherPage = async (req, res) => {
  const { searchByName, searchByEmail, searchByPhone } = req.query;
  let queryParams = [];
  let baseQuery = "SELECT * FROM teachers WHERE 1=1";

  if (searchByName) {
    queryParams.push(`%${searchByName}%`);
    baseQuery += ` AND name ILIKE($${queryParams.length})`;
  }
  if (searchByEmail) {
    queryParams.push(`%${searchByEmail}%`);
    baseQuery += ` AND email ILIKE($${queryParams.length})`;
  }
  if (searchByPhone) {
    queryParams.push(`%${searchByPhone}%`);
    baseQuery += ` AND phone ILIKE($${queryParams.length})`;
  }
  try {
    const result = await db.query(baseQuery, queryParams);

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
