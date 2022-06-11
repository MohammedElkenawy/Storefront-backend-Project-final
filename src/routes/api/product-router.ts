import { Router, json } from "express";

import {
	getAllProducts,
	getProductById,
	createNewProduct,
} from "../../handlers/product-handler";
import isAuthorized from "../../middlewares/authorization";

export const router = Router();

router.get("/all", getAllProducts);

router.get("/:id", getProductById);

router.post("/", isAuthorized, json(), createNewProduct);
