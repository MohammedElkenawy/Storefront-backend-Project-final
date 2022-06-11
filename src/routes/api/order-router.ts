import { Router } from "express";

import getOrders from "../../handlers/order-handler";
import isAuthorized from "../../middlewares/authorization";

export const router = Router();

router.get("/:id", isAuthorized, getOrders);
