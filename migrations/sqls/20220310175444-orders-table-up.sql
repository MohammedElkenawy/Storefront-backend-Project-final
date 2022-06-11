CREATE TYPE order_status as ENUM ('ACTIVE', 'COMPLETE');

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT,
  status order_status,
  CONSTRAINT fk_user
	FOREIGN KEY(user_id)
		REFERENCES users(id)
);

INSERT INTO orders(user_id, status) VALUES(1, 'ACTIVE');
INSERT INTO orders(user_id, status) VALUES(2, 'ACTIVE');
INSERT INTO orders(user_id, status) VALUES(2, 'COMPLETE');
INSERT INTO orders(user_id, status) VALUES(2, 'COMPLETE');
INSERT INTO orders(user_id, status) VALUES(3, 'ACTIVE');
INSERT INTO orders(user_id, status) VALUES(4, 'COMPLETE');
INSERT INTO orders(user_id, status) VALUES(5, 'ACTIVE');
INSERT INTO orders(user_id, status) VALUES(5, 'COMPLETE');
INSERT INTO orders(user_id, status) VALUES(5, 'COMPLETE');