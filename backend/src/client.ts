import axios from 'axios'

const pokedexAPI = axios.create({
    baseURL:'http://127.0.0.1:3000/pokedex',
    timeout:5000
})

pokedexAPI.interceptors.response.use((res)=>{
    console.log(`Recu de pokedex API sur http://127.0.0.1:3000/ -- statut:${res.status}`)
    return res
})

const {data} = await pokedexAPI.get('/')

console.log(data)



