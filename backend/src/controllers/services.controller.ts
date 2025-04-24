import { Request, Response } from 'express'
import GetAllServicesService from '../services/services.service'
export default async function GetAllServicesController(req: Request, res: Response) {
    try {
        const Jobs = await GetAllServicesService()
        res.status(200).send(Jobs)
    } catch (error) {
        res.status(500).send('Error')
    }
}