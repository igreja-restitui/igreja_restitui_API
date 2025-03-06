import { Router } from "express";
const router = Router();

import memberController from "../controllers/member.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, memberController.create);
router.get("/", authMiddleware, memberController.getAllMembers);

export default router;
