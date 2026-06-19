import { type Request, type Response } from 'express';
import axios from 'axios'
import pokeAPI from '../services/externalAPI.js';


export default async function listerDeAPI(req:Request,res:Response) {
    
    try {
        const {data} = await pokeAPI.get('/', {
            params: req.query
        })
        res.status(200).json(data)
    } catch(error) {
        if(axios.isAxiosError(error) && error.response) {
            console.log(error.response.status)
            console.log(error.response.data)
        } else {
            console.log("Network error")
        }

    }

    
}