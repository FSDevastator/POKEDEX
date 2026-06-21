import prisma from "../../utils/prisma.js"


export default async function dbDeleteRecords(deletionId:number) {
    
    if (deletionId === undefined) {
        console.log("deletion error in db layer")
        throw new TypeError("Deletion id must be non-null.")
    }

    try {
        const result = await prisma.pokemon.delete({
            where: {
                id: deletionId
            }
        })
        return result
    } catch (error) {
        throw error
    }
}