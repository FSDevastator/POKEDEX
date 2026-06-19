import axios from 'axios'

const pokeAPI = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon',
    timeout:5000
})

export default pokeAPI

