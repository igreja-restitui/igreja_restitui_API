import express from "express";
const route = express.Router();

import userController from "../controllers/user.controller.js";
import {
  validId,
  validUser,
  validRole,
} from "../middlewares/global.middlewares.js";

route.post("/", userController.create);
route.get("/", userController.findAllUsers);
route.get("/:id", validId, validUser, userController.findUserById);
route.patch("/:id", validId, validUser, userController.updateUser);
route.delete("/:id", validId, validUser, userController.deleteUser);

export default route;
