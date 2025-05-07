import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
const applyGlobalMiddlewares = (app: Express) => {
    app.set('trust proxy', true)
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use(cors({
        credentials: true,
        origin: process.env.CLIENT_ENV_URL || 'http://localhost:5173/'
    }));
    app.use(helmet())

}
export default applyGlobalMiddlewares