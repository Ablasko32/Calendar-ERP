import db from "../config/database.js";

const getClassPage = async (req, res) => {
  const { searchByName, searchByStartDate, searchByEndDate } = req.query;
  let queryParams = [];
  let baseQuery = "SELECT * FROM events WHERE 1=1";

  if (searchByName) {
    queryParams.push(`%${searchByName}%`);
    baseQuery += ` AND name ILIKE($${queryParams.length})`;
  }
  if (searchByStartDate) {
    queryParams.push(searchByStartDate);
    baseQuery += ` AND start_time>($${queryParams.length})`;
  }
  if (searchByEndDate) {
    queryParams.push(searchByEndDate);
    baseQuery += ` AND end_time <($${queryParams.length})`;
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
  const urlString = `?searchByName=${searchByName || ""}&searchByStartDate=${
    searchByStartDate || ""
  }&searchByEndDate=${searchByEndDate || ""}`;
  console.log(urlString);
  // querry execution
  try {
    const result = await db.query(baseQuery, queryParams);
    console.log(result.rows);

    res.render("classes.ejs", {
      classes: result.rows,
      page: page,
      urlString: urlString,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getClassPage };
