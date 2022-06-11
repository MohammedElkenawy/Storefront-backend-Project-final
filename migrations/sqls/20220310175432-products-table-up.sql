CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  price money
);

INSERT INTO products(name, price) VALUES('desktop', 10);
INSERT INTO products(name, price) VALUES('headphone', 11);
INSERT INTO products(name, price) VALUES('keyboards', 10);
INSERT INTO products(name, price) VALUES('mouses', 8);
INSERT INTO products(name, price) VALUES('mousepads', 3);
INSERT INTO products(name, price) VALUES('displays', 15);
