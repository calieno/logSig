import { Router } from 'express'
import DefaultPage from './controller/DefaultPage'
import { sendEmailTeste } from './mail/sendmail'

const route = Router()

route.get('/', DefaultPage.index)

route.get('/mail', () => {
  sendEmailTeste('calieno@gmail.com').catch(console.error)
})

route.get('/', DefaultPage.index)

route.get('/mail', () => {
  sendEmailTeste('calieno@gmail.com').catch(console.error)
})

route.get('/teste', () => {
  console.log('TESTE OK')
})

// APAGAR ROTA DE TESTE
route.get('/teste', () => {
  console.log('TESTE OK')
})

export default route
