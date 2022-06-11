CREATE TABLE IF NOT EXISTS order_products (
	order_id SERIAL,
	product_id SERIAL,
	quantity INT,
	PRIMARY KEY(product_id, order_id),
	CONSTRAINT fk_product
		FOREIGN KEY(product_id)
			REFERENCES products(id),
	CONSTRAINT fk_order
		FOREIGN KEY(order_id)
			REFERENCES orders(id)
);

INSERT INTO order_products(order_id, product_id, quantity) VALUES (2, 3, 2);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (3, 4, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (1, 1, 4);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (3, 2, 2);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (1, 5, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (4, 2, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (8, 2, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (5, 6, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (6, 5, 1);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (1, 2, 6);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (9, 2, 3);
INSERT INTO order_products(order_id, product_id, quantity) VALUES (7, 3, 4);