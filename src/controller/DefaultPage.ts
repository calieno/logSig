import { Response, Request } from 'express'

class DefaultPage{
    async index(res: Response, req: Request){
        return res.status(201).json({pagina: "Inicial"})
    }
}

export default new DefaultPage()