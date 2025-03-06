import memberService from "../services/member.service.js";
import userService from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const { name, telefone, data_nascimento, endereco, email, tipo } = req.body;
    if (
      !name ||
      !telefone ||
      !data_nascimento ||
      !endereco ||
      !email ||
      !tipo
    ) {
      return res
        .status(400)
        .send({ message: "Todos os campos são obrigatórios!" });
    }

    const member = await memberService.createService(req.body);
    res.status(201).send(member);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await memberService.findAllService();
    if (members.length === 0) {
      return res.status(400).send({ message: "Não há membros cadastrados!" });
    }

    const userLogged = await userService.findUserById(req.userId);

    if (userLogged.role === "admin") {
      res.status(200).send(members);
    } else {
      res.status(403).send({
        message: "Você não possui permissão para acessar essa informação!",
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, getAllMembers };
