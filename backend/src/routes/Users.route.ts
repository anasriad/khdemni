import express from 'express'
import { LoginController } from '../controllers/users.controller'
const UserRouter = express()

UserRouter.post('/login', LoginController)
//linking the router with the respective controllers
export default UserRouter