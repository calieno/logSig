import 'dotenv/config'
//import App from './App'
import express, {NextFunction, Request, Response}  from 'express'
import { sendEmailTeste } from './mail/sendmail'
import DefaultPage from './controller/DefaultPage'

const App = express()
App.use(express.json())


const vPort = process.env.PORT ? Number(process.env.PORT) : 3333

App.get('/', DefaultPage.index)

App.get('/mail', ()=>{
    sendEmailTeste("calieno@gmail.com").catch(console.error)
}) 


App.get('/teste', ()=> {
    console.log('TESTE OK')
})

App.listen(vPort, ()=>{
    console.log('Server is Running in ' + vPort + ' port' )
})