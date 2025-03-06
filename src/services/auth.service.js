import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = (email) => User.findOne({ email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.SECRET_JWT_KEY, { expiresIn: 86400 });

export default {
  loginService,
  generateToken,
};
