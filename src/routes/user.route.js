const route = require("express").Router();
const userController = require("../controllers/user.controller");
const {
  validId,
  validUser,
  validRole,
} = require("../middlewares/global.middlewares");

route.post("/", userController.create);
route.get("/", userController.findAllUsers);
route.get("/:id", validId, validUser, userController.findUserById);
route.patch("/:id", validId, validUser, userController.updateUser);

module.exports = route;
