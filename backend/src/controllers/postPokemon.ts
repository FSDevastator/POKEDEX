import recuperePokemon from '../controllers/recuperePokemon.js';
import { response, Router, type Request, type Response } from 'express';
import prisma from "../../utils/prisma.js"


export default async function postPokemon(req:Request, res:Response) {

    const donnee = await recuperePokemon(req.params.nom)

    if (!donnee) {
        res.status(404).json({erreur: "Ce pokemon n'existe pas."})
    }

    try {

        const pokemon = await prisma.pokemon.create({
            data: donnee as any
        })

        res.status(201).json({message:`Le pokemon ${pokemon.nom} a ete capture!`})

    } catch(e) {
        
        console.log(e)
        res.status(400).json({erreur: "Pokemon deja existant dans la base de donnees."})
        
    }
}