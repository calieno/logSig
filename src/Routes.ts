import { Router } from "express"
import DefaultPage from "./controller/DefaultPage"
import { sendEmailTeste } from "./mail/sendmail"

const route = Router()

route.get('/', DefaultPage.index)

route.get('/mail', ()=>{
    sendEmailTeste("calieno@gmail.com").catch(console.error)
}) 

export default route
