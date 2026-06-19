import { type Request, type Response } from 'express';

import { Prisma } from '../../generated/prisma/client.js'

import pokeDeleteService from '../services/pokeDeleteService.js';

export default async function deletePokemon(req: Request, res: Response) {

    if (req.body === undefined) {
        console.error("An undefined body was provided in the request.  Operation aborted.")
        res.status(400).json({message:"The deletion request must contain non-null data."})
    }

    const deletionIds = req.body;

    let result = undefined;

    try {
        result = await pokeDeleteService(deletionIds)
    } catch (error) {
        if ( error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2014"){
                console.error("A relation violation occurred on attempted deletion: ", error.code)
                res.status(422).json({message:"The record could not be deleted."})
            } else {
                console.error("Prisma error code: ", error.code)
                res.status(500).json({message:"A record could not be deleted."})
            }
        } else {
            console.error("An unexpected error occurred: ", error)
        }

    }

    if (result) {
        res.json(result)
    }

}