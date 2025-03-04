import User from "../models/User.js";
// Serviço para criação de um novo usuário
const createService = (body) => User.create(body);

// Serviço para get all usuarios
const findAllService = () => User.find();

const findUserById = (id) => User.findById(id);

const updateUserService = (id, name, username, email, password) =>
  User.findOneAndUpdate(
    { _id: id },
    {
      name: name,
      username: username,
      email: email,
      password: password,
    }
  );

const deleteUserService = (id) => User.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findUserById,
  updateUserService,
  deleteUserService,
};
