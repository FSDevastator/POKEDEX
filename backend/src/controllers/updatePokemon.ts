import { type Request, type Response } from 'express';
import prisma from "../../utils/prisma.js"
import { Prisma } from '../../generated/prisma/client.js'


export default async function updatePokemon(req:Request,res:Response) {

    const {pokemonName} = req.params
    let updatedPoke=undefined;

    try {
        updatedPoke = await prisma.pokemon.updateMany({
        where: {
            nom: pokemonName as any
        },
        data: req.body
    })

    } catch(error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            console.error("Client-side type validation failed on DB update: ", error.message)
            res.status(400).json({message:"Pokemon name type is incorrect."})

        } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2006") {
                console.error("Type validation failed at database for name field.", error.message)
                res.status(400).json({message:"Pokemon name type is incorrect."})
            } 
        } else {
            console.error("An unknown error occurred and the update was not completed.")
            throw error
        }

    }
    
    if (updatedPoke) {
        res.json({...{message:"Update info"},...updatedPoke})
    }
}