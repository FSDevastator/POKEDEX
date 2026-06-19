import { Router} from 'express';

import postPokemon from '../controllers/postPokemon.js';
import getAllPokemon from '../controllers/getAllPokemon.js';
import updatePokemon from '../controllers/updatePokemon.js';
import deletePokemon from '../controllers/deletePokemon.js';

const routerPokedex = Router();

// DB CRUD operations

// CREATE
// localhost:3000/capturer/nom
routerPokedex.post("/capturer/:nom",postPokemon)

// READ
// localhost:3000/pokedex
routerPokedex.get("/",getAllPokemon)

// UPDATE
// localhost:3000/pokedex/update/pikachu
routerPokedex.patch("/update/:pokemonName",updatePokemon)

// DELETE
// localhost:3000/delete/
routerPokedex.post("/delete/",deletePokemon)

export default routerPokedex;