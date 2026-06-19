import dotenv from "dotenv"
import express from 'express';
import routerPokedex from './routes/pokedex.route.js';

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json())

// localhost:3000/pokedex/...
app.use("/pokedex",routerPokedex)

app.listen(PORT, () => {console.log(`Server started on http://localhost:${PORT}`)})

