const mongoose = require("mongoose");
const userService = require("../services/user.service");

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }
  next();
};

const validUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.findUserById(id);
  if (!user) {
    return res.status(400).send({ message: "Não há usuário com esse ID!" });
  }

  req.id = id;
  req.user = user;
  next();
};

const validRole = async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.findUserById(id);
  if (!user) {
    return res.status(400).send({ message: "Não há usuário com esse ID!" });
  }
  if (user.role !== "admin") {
    return res
      .status(403)
      .send({ message: "Você não tem permissão para esse recurso!" });
  } else {
    console.log("vc é admin");
  }

  next();
};

module.exports = { validId, validUser, validRole };
