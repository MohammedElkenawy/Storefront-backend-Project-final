import pool from "../controllers/postgres-controller";
import { Order, QueryOutput } from "../types/interfaces";

const format = (sqlResult: QueryOutput[], userId: number): Order[] => {
	const orderId: number[] = [...new Set(sqlResult.map(o => o.id))].sort();
	const orders: Order[] = [];

	orderId.forEach(id => {
		orders.push({
			id,
			userId,
			status: "ACTIVE",
			prods: [],
		});
	});

	sqlResult.forEach(order => {
		const { productid, productname, quantity, status } = order;
		orders[order.id - 1].status = status;
		orders[order.id - 1].prods.push({
			productId: productid,
			productName: productname,
			quantity,
		});
	});

	return orders;
};

export const findOrdersByUserId = async (userID: number): Promise<Order[]> => {
	const query = `
  SELECT 
    orders.id as id,
    orders.status as status,
    products.id as productId,
    products.name as productName,
    order_products.quantity as quantity

    FROM 
      ((orders
      INNER JOIN order_products ON orders.id = order_products.order_id)
      INNER JOIN products ON order_products.product_id = products.id)
  
    WHERE
      orders.user_id = ($1)
  `;

	try {
		const result = await pool.query(query, [userID]);
		return format(result.rows, userID);
	} catch (e) {
		throw new Error("can't find order");
	}
};
