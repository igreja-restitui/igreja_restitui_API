import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) => User.findOne({ email }).select("+password");

const generateToken = (id, name) =>
  jwt.sign({ id, name }, process.env.SECRET_JWT_KEY, { expiresIn: 10 });

export default {
  loginService,
  generateToken,
};
