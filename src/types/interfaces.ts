export interface Order {
	id: number;
	userId: number;
	status: "ACTIVE" | "COMPLETE";
	prods: {
		productId: number;
		productName: string;
		quantity: number;
	}[];
}

export interface Product {
	id?: number;
	name: string;
	price: number;
}

export interface User {
	id?: number;
	firstName: string;
	lastName: string;
	password?: string;
}

export interface QueryOutput {
	id: number;
	status: "ACTIVE" | "COMPLETE";
	productid: number;
	productname: string;
	quantity: number;
}
