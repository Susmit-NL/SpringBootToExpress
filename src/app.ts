import 'reflect-metadata'
import express from 'express'
import * as dotEnv from 'dotenv'
import * as bodyParser from 'body-parser'
import router from './route/Route'

const app = express()
app.use(bodyParser.json())
dotEnv.config()

app.use('/', router)
app.listen(8083, () => { console.log('Server Running in port 8083....') })
