import express from 'express'
import cors from 'cors'
import route from './Routes'

class App{
    server: any
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json)
        this.server.use(cors())
    }

    routes(){
        this.server.use(route)
    }
}

export default new App().server