import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { router } from './routes'
import 'express-async-errors'

class App {
  server: any
  constructor() {
    this.server = express()
    this.middlewares()
    //this.rotaInexistente()
    this.routes()
    this.tratError()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(router)
  }

  // rotaInexistente(){
  //   this.server.use(
  //     function(req: Request, res: Response, next: NextFunction){
  //       res.status(404).json('Rota não existente')
  //     } 
  //   )
  // }

  tratError() {
    this.server.use(
      (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
      ) => {
        return response.json({
          status: 'Error',
          message: error.message,
        })
      },
    )
  }
}

export default new App().server
