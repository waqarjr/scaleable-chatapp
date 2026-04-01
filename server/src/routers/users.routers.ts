import { Router } from "express";
import {getUsers} from "../controllers/users.controllers";
import middleware from "../lib/middleware";

const router = Router();

router.get("/users", middleware,getUsers);

export default router;