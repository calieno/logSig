import 'dotenv/config'
import App from './App'
import express, { NextFunction, Request, Response } from 'express'

//import route from './Routes'

//const App = express()
//App.use(express.json())
//App.use(route)

const vPort = process.env.PORT ? Number(process.env.PORT) : 3333

App.listen(vPort, () => {
  console.log('Server is Running in ' + vPort + ' port')
})
