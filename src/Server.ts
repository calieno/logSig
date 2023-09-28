import 'dotenv/config'
import app from './App'

const vPort = process.env.PORT ? Number(process.env.PORT) : 3000

app.listen(vPort, ()=>{
    console.log('Server is Running in ' + vPort + ' port' )
})