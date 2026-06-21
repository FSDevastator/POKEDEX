import { type Request, type Response } from 'express';

import { Prisma } from '../../generated/prisma/client.js'

import pokeDeleteService from '../services/pokeDeleteService.js';

export default async function deletePokemon(req: Request, res: Response) {

    try {
        
        const result = await pokeDeleteService(Number(req.params.id))
        res.status(200).json(result)
        
    } catch (error) {
        if ( error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2014"){
                console.error("A relation violation occurred on attempted deletion: ", error.code)
                res.status(422).json({message:"The record could not be deleted."})
            } else if (error.code==='P2025'){
                console.error("Prisma error code: ", error.code)
                res.status(400).json({message:"A record could not be deleted."})
            }
        } else if(error instanceof TypeError) {
            console.log(error.message)
            res.status(400).json({message:`${error.message}`})
        }
        else {
            console.error("An unexpected error occurred: ", error)
        }

    }

    

}