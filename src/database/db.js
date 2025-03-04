import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDatabase = () => {
  console.log("Esperando a conexão com o banco de dados!");

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Atlas Conectado"))
    .catch((err) => console.log(err));
};

export default connectDatabase;
