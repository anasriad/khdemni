import prisma from "../../prisma/Generator";


export default async function GetAllServicesService(){
    try {
        return await prisma.jobs.findMany({})
    } catch (error) {
        throw error
    }
}