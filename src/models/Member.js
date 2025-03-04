import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  data_nascimento: {
    type: String,
    default: "não disse",
  },
  endereco: {
    type: String,
    default: "não disse", // default role is user
  },
  email: {
    type: String,
    default: "nãotem@gmail.com",
  },
});

const Member = mongoose.model("Member", MemberSchema);

export default Member;
