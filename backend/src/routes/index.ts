import express from 'express'
import ServicesRoutes from './services.router'

const Router = express()

Router.use('/services', ServicesRoutes)

export default Router