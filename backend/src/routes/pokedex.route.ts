import { response, Router, type Request, type Response } from 'express';
import postPokemon from '../controllers/postPokemon.js';
import getAllPokemon from '../controllers/getAllPokemon.js';

const routerPokedex = Router();

// localhost:3000/capturer/pikachu

routerPokedex.get("/capturer/:nom", postPokemon)

// localhost:3000

routerPokedex.get("/", getAllPokemon)

export default routerPokedex;