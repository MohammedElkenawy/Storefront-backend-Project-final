import { Router, Request, Response } from "express";

import { router as orderRouter } from "./api/order-router";
import { router as productRouter } from "./api/product-router";
import { router as userRouter } from "./api/user-router";

export const router = Router();

router.use("/order", orderRouter);
router.use("/product", productRouter);
router.use("/user", userRouter);

router.get("*", (req: Request, res: Response): Response => res.sendStatus(404));
