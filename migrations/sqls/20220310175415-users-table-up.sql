CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  password text
);


INSERT INTO users(first_name, last_name, password) VALUES('Mohamed', 'Ahmed', '85214f');
INSERT INTO users(first_name, last_name, password) VALUES('Ahmed', 'Elkenawy', '65895q');
INSERT INTO users(first_name, last_name, password) VALUES('Sarah', 'Hshmat', 's3s4d5');
INSERT INTO users(first_name, last_name, password) VALUES('Yamen', 'Ahmed', 'u7u5tfd');
INSERT INTO users(first_name, last_name, password) VALUES('Ashgan', 'Mohamed', 'okj389');