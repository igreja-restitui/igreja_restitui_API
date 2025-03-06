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
import memberRoute from "./src/routes/member.route.js";

// Configurando Uso do Json
app.use(express.json());

// usando rotas
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/member", memberRoute);

app.get("/", (req, res) => {
  res.send("API Restitui Mern");
});

//SERVIDOR RODANDO
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}!`));
