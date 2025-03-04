const express = require("express");
const app = express();
const port = 3000;

//conectando ao MongoDB
const connectDatabase = require("./src/database/db");
connectDatabase();

//Trazendo rotas
const userRoute = require("./src/routes/user.route");

// Configurando Uso do Json
app.use(express.json());

// usando rotas
app.use("/user", userRoute);

//SERVIDOR RODANDO
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));
