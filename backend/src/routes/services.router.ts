import express from 'express'
import GetAllServicesController from '../controllers/services.controller'
const ServicesRoutes = express()

ServicesRoutes.get('/', GetAllServicesController)

export default ServicesRoutes