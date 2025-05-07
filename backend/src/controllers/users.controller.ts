import { Request, Response } from 'express'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { LoginMemberService } from '../services/user.services'
export async function LoginController(req: Request, res: Response) {
    const { email, password } = req.body
    //deconstructuring the body from the http request to get the information from the frontend
    try {
        const user = await LoginMemberService(email, password)
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2025") res.status(404).send('Credentials Not Found')
            else res.status(500).send('Internal Server Error, Try Again')
        }
        else res.status(500).send('Unexpected Error, Try Again')
    }

}