import Member from "../models/Member.js";

const createService = (body) => Member.create(body);

const findAllService = () => Member.find();

export default {
  createService,
  findAllService,
};
