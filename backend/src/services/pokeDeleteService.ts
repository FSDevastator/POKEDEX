import dbDeleteRecords from "../repositories/dbDeleteRecords.js";


export default async function pokeDeleteService(deletionId:number) {
    
    if (deletionId === undefined) {
        console.log("Deletion error in service layer: undefined type Id provided.")
        throw new TypeError("Deletion id must be non-null.")
    }

    // <-- Service transforms here

    try {
        return await dbDeleteRecords(deletionId)
    } catch(error) {
        throw error
    }


    
    
}