import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import route from './Routes'

class App {
  server: any
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.tratError()
  }

  middlewares() {
    this.server.use(express.json)
    this.server.use(cors())
  }

  routes() {
    this.server.use(route)
  }

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
