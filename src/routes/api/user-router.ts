import { Router, json } from "express";

import isAuthorized from "../../middlewares/authorization";
import {
	getAllUsers,
	getUser,
	createNewUser,
} from "../../handlers/user-handler";

export const router = Router();

router.post("/", json(), createNewUser);

router.use(isAuthorized);

router.get("/all", getAllUsers);

router.get("/:id", getUser);
