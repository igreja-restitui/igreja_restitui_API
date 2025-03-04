import bcrypt from "bcrypt";
import authService from "../services/auth.service.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Por favor, preencha todos os campos!" });
    }

    const user = await authService.loginService(email);
    if (!user) {
      return res.status(401).send({ message: "Email ou senha inválidos" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).send({ message: "Email ou senha inválidos" });
    }

    const token = authService.generateToken(user.id, user.name);
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { login };
