import axios from 'axios'

const pokeAPI = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon/',
    timeout:5000,
})

pokeAPI.interceptors.response.use((res) => {
    console.log('Recu de pokeAPI <-', res.status);
    return res
})

export default async function recuperePokemon(leNom:any) {

    let resp=undefined;

    try {
        resp = await pokeAPI.get(leNom)
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
        } else {
            console.log("Network error")
        }
    }
    
    if (resp) {
        
        const health = resp.data.stats.find( (s:any) => s.stat.name ==='hp').base_stat;

        return {
            numeroPokedex: resp.data.id,
            nom: resp.data.name,
            typePrincipal: TYPES[resp.data.types[0].type.name],
            typeSecondaire: resp.data.types[1] ? TYPES[resp.data.types[1].type.name]:null,
            pointsVie: health,
            taille: resp.data.height,
            poids: resp.data.weight,
            imageURL: resp.data.sprites.front_default,
        }
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