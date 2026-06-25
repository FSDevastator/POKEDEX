import dotenv from "dotenv"
import express from 'express';
import routerPokedex from './routes/pokedex.route.js';
import routerAuth from "./routes/auth.routes.js";

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json())

// FOR NGINX
app.set('trust proxy',true);
app.get('/', (req,res)=>{
    res.json({message:"Hello from express behind NGINX"})
})

// localhost:3000/pokedex/...
app.use("/pokedex",routerPokedex)

// localhost:3000/auth
app.use("/auth", routerAuth)

app.listen(PORT, () => {console.log(`Server started on http://localhost:${PORT}`)})

