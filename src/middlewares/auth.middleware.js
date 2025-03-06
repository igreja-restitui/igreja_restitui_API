import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";
export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).send({ message: "Faça o login antes de acessar" });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({ message: "Faça o login antes de acessar" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).send({ message: "Faça o login antes de acessar" });
    }

    jwt.verify(token, process.env.SECRET_JWT_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Token inválido!" });
      }
      const user = await userService.findUserById(decoded.id);
      if (!user || !decoded.id) {
        return res.status(401).send({ message: "Token inválido" });
      }
      req.userId = user.id;

      next();
    });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
