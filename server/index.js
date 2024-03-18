import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//const envData = dotenv.config().parsed;
dotenv.config()
let portNumber = process.env.PORT || 3001
//let portNumber = envData.PORT || 3001

const app = express()

app.use(json())
app.use(cors())


app.listen(portNumber, () => {
    console.log(`Listning to port: ${portNumber}`);
})