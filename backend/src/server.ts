import express from 'express';
import dotenv from "dotenv"
import routerPokedex from './routes/pokedex.route.js';

const PORT = 3000;

const app = express();
app.use(express.json())

// localhost:3000/pokedex/...

app.use("/pokedex",routerPokedex)

app.listen(PORT, () => {console.log(`Server started on http://localhost:${PORT}`)})

