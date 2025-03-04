import userService from "../services/user.service.js";

//criando usuario

const create = async (req, res) => {
  try {
    const { name, username, email, password, role } = req.body;

    if (!name || !username || !password || !email) {
      res.status(400).send({
        message:
          "Erro ao cadastrar usuário, por favor preencha todos os campos para registrar!",
      });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      res
        .status(400)
        .send({ message: "Erro ao criar usuário, tente novamente!" });
    }

    res.status(201).send({
      message: "Usuário cadastrado com sucesso!",
      user: {
        _id: user._id,
        name,
        username,
        email,
        password,
        role,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllService();
    if (users.length === 0) {
      return res.status(400).send({ message: "Não há usuários cadastrados!" });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findUserById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name && !username && !password && !email) {
      res.status(400).send({
        message:
          "Erro ao atualizar usuário, por favor preencha ao menos um campo para atualizar!",
      });
    }
    const id = req.id;

    await userService.updateUserService(id, name, username, email, password);
    res.send({ message: "Usuário atualizado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.id;

    await userService.deleteUserService(id);
    res.send({ message: "Usuário deletado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAllUsers, findUserById, updateUser, deleteUser };
