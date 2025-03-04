import { Router } from "express";
const router = Router();

import userController from "../controllers/user.controller.js";
import {
  validId,
  validUser,
  validRole,
} from "../middlewares/global.middlewares.js";

router.post("/", userController.create);
router.get("/", userController.findAllUsers);
router.get("/:id", validId, validUser, userController.findUserById);
router.patch("/:id", validId, validUser, userController.updateUser);
router.delete("/:id", validId, validUser, userController.deleteUser);

export default router;
