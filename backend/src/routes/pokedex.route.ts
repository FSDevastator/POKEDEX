import { Router} from 'express';

import postPokemon from '../controllers/postPokemon.js';
import getAllPokemon from '../controllers/getAllPokemon.js';
import updatePokemon from '../controllers/updatePokemon.js';
import deletePokemon from '../controllers/deletePokemon.js';
import listerDeAPI from '../controllers/listFromAPI.js';

const routerPokedex = Router();

// DB CRUD operations

// CREATE
// localhost:3000/pokedex/capturer/nom
routerPokedex.post("/capturer/:nom",postPokemon)

// READ
// localhost:3000/pokedex - tous les pokemon dans la DB
routerPokedex.get("/",getAllPokemon)
// locahost:3000/pokedex/api - liste de pokemon dans l'API
routerPokedex.get("/api", listerDeAPI)
// localhost:3000/pokedex/api/:nom
routerPokedex.get("/api/:nom", async ()=>{})
// UPDATE
// localhost:3000/pokedex/update/pikachu
routerPokedex.patch("/update/:pokemonName",updatePokemon)

// DELETE
// localhost:3000/delete/
routerPokedex.post("/delete/",deletePokemon)

export default routerPokedex;