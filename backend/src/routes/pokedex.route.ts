import { response, Router, type Request, type Response } from 'express';
import prisma from "../../utils/prisma.js"

const routerPokedex = Router();

const TYPES : Record<string,string> = {
    normal : " NORMAL ",
    fire : " FEU ",
    water : " EAU ",
    grass : " PLANTE ",
    electric : " ELECTRIK ",
    ice : " GLACE ",fighting : " COMBAT ",
    poison : " POISON ",
    ground : " SOL ",
    flying : " VOL ",
    psychic : " PSY ",
    bug : " INSECTE ",
    rock : " ROCHE ",
    ghost : " SPECTRE ",
    dragon : " DRAGON ",
    dark : " TENEBRES ",
    steel : " ACIER ",
    fairy : " FEE "
}

async function recuperePokemon(leNom:any) {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${leNom}/`)

    if (!reponse.ok) 
    {
        return null
    } 
    

    const data : any = await reponse.json()

    const hp = data.stats.find( (s:any) => s.stat.name ==='hp').base_stat;

    return {
        numeroPokedex: data.id,
        nom: data.name,
        typePrincipal: TYPES[data.types[0].type.name],
        typeSecondaire: TYPES[data.types[1].type.name],
        pointsVie: hp,
        taille: data.height,
        poids: data.weight,
        imageURL: data.sprites.front_default,
    }
}

// localhost:3000/capturer/pikachu
routerPokedex.post("/capturer/:nom", async (req:Request, res:Response)=> {
    
    
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

        res.status(400).json({erreur: "Pokemon deja existant dans la base de donnees."})
        
    }
})

// localhost:3000

routerPokedex.get("/", async(req:Request,res:Response) => {
    const pokemons = await prisma.pokemon.findMany({
        orderBy : {numeroPokedex : "asc"}
    });

    res.json(pokemons)
})

export default routerPokedex;