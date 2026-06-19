import dbDeleteRecords from "../repositories/dbDeleteRecords.js";


export default async function pokeDeleteService(deletionIds:Array<number>) {
    
    if (deletionIds === undefined) {
        console.log("deletion error in service layer")
        return
    }

    // transforms

    let result = undefined

    try {
        result = await dbDeleteRecords(deletionIds)
    } catch(error) {
        throw error
    }

    if (result) {
        return result
    }


    
    
}