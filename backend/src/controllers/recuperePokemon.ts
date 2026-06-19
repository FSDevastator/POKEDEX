
export default async function recuperePokemon(leNom:any) {
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
        typeSecondaire: data.types[1] ? TYPES[data.types[1].type.name]:null,
        pointsVie: hp,
        taille: data.height,
        poids: data.weight,
        imageURL: data.sprites.front_default,
    }
}

const TYPES : Record<string,string> = {
    normal : "NORMAL",
    fire : "FEU",
    water : "EAU",
    grass : "PLANTE",
    electric : "ELECTRIK",
    ice : "GLACE",
    fighting : "COMBAT",
    poison : "POISON",
    ground : "SOL",
    flying : "VOL",
    psychic : "PSY",
    bug : "INSECTE",
    rock : "ROCHE",
    ghost : "SPECTRE",
    dragon : "DRAGON",
    dark : "TENEBRES",
    steel : "ACIER",
    fairy : "FEE"
}