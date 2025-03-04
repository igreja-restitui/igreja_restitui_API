import express from "express";
const app = express();
const port = 3000;
import dotenv from "dotenv";

dotenv.config();
//conectando ao MongoDB
import connectDatabase from "./src/database/db.js";
connectDatabase();

//Trazendo rotas
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

// Configurando Uso do Json
app.use(express.json());

// usando rotas
app.use("/user", userRoute);
app.use("/auth", authRoute);

//SERVIDOR RODANDO
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));
