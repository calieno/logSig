import { Router, Request, Response, NextFunction } from "express"
//import listUser from "./useCases/listUsers/listUser"
import { PrismaClient } from "@prisma/client"
const router = Router()

const vPort = process.env.PORT

//############ APAGAR ################
router.get("/", (req: Request, res: Response) => {
  console.log('TESTE OK')
  res.send('TESTE OK =>' + vPort)
})
//####################################

const prisma = new PrismaClient()

router.get('/user', async (req: Request, res: Response) => {
  const users = await prisma.user.findFirst()
  //return {users}

    res.json({users})

})


router.use(function(req: Request, res: Response, next: NextFunction){
        res.status(404).json('Rota não existente')
      } 
    )
  


export { router }
