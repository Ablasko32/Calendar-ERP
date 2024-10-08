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

  // pagination
  const LIMIT = 3;
  let page = parseInt(req.query.page) || 1;
  let offset = LIMIT * (page - 1);
  let paginationQuery = ` LIMIT $${queryParams.length + 1} OFFSET $${
    queryParams.length + 2
  }`;

  baseQuery += paginationQuery;
  queryParams.push(LIMIT, offset);

  // url string generation
  const urlString = `?searchByName=${searchByName || ""}&searchByEmail=${
    searchByEmail || ""
  }&searchByPhone=${searchByPhone || ""}`;
  console.log(urlString);
  // querry execution
  try {
    const result = await db.query(baseQuery, queryParams);

    res.render("teachers.ejs", {
      teachers: result.rows,
      page: page,
      urlString: urlString,
    });
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

const deleteTeacher = async (req, res) => {
  try {
    await db.query("DELETE FROM teachers WHERE id=$1", [req.params.id]);
    res.redirect("/teachers");
  } catch (err) {
    console.log(err);
  }
};

const editTeacher = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM teachers WHERE id=$1", [
      req.params.id,
    ]);

    res.render("editTeacher.ejs", { target: result.rows[0] });
  } catch (err) {
    console.log(err);
  }
};

const postEditTeacher = async (req, res) => {
  const { id, name, email, phone } = req.body;
  try {
    const result = await db.query(
      "UPDATE teachers SET name=$1, email=$2, phone=$3 WHERE id=$4",
      [name, email, phone, id]
    );

    res.redirect("/teachers");
  } catch (err) {
    console.log(err);
  }
};

export {
  getTeacherPage,
  addNewTeacher,
  deleteTeacher,
  editTeacher,
  postEditTeacher,
};
