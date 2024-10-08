CREATE TABLE teachers(
	id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150),
	phone VARCHAR(150),
	register_date TIMESTAMP DEFAULT NOW()


);


CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  teacher_id INT REFERENCES teachers(id)

);


CREATE TABLE students(
	id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL UNIQUE,
	phone VARCHAR(150),
	register_date TIMESTAMP DEFAULT NOW()

);


