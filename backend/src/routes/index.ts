import express from 'express'
import ServicesRoutes from './services.router'
import UserRouter from './Users.route'
const Router = express()

Router.use('/services', ServicesRoutes)
Router.use('/users', UserRouter)
//setting up the routes, so that each http request gets sent to the respective segment of the backend
//each segment has its own routers, controllers, & services
export default Router