import express from 'express';
import dotenv from "dotenv"
import routerPokedex from './routes/pokedex.route.js';

const PORT = process.env.PORT;

const app = express();
app.use(express.json())

// localhost:3000/pokedex/...

app.use("/pokedex",routerPokedex)

app.listen(3000, () => {console.log(`Server started on http://localhost:${PORT}`)})

