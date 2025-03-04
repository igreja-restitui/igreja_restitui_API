import express from "express";
const app = express();
const port = 3000;

//conectando ao MongoDB
import connectDatabase from "./src/database/db.js";
connectDatabase();

//Trazendo rotas
import userRoute from "./src/routes/user.route.js";

// Configurando Uso do Json
app.use(express.json());

// usando rotas
app.use("/user", userRoute);

//SERVIDOR RODANDO
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));
