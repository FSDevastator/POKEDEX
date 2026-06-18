import { response, Router, type Request, type Response } from 'express';
import prisma from "../../utils/prisma.js"

export default async function getAllPokemon(req:Request,res:Response) {
    const pokemons = await prisma.pokemon.findMany({
        orderBy : {numeroPokedex : "asc"}
    });

    res.json(pokemons)
}