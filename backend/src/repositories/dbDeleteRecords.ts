import prisma from "../../utils/prisma.js"


export default async function dbDeleteRecords(deletionIds:Array<number>) {
    
    if (deletionIds === undefined) {
        console.log("deletion error in db layer")
        return
    }

    let result = undefined

    try {
        result = await prisma.pokemon.deleteMany({
            where: {
                id: {
                    in: deletionIds
                }
            }
        })
    } catch (error) {
        throw error
    }

    if (result) {
        return result
    }
}