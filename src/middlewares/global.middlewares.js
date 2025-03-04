import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }
  next();
};

export const validUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await userService.findUserById(id);
  if (!user) {
    return res.status(400).send({ message: "Não há usuário com esse ID!" });
  }

  req.id = id;
  req.user = user;
  next();
};

export const validRole = async (req, res, next) => {
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
