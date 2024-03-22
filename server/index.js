import express, { application, json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import http from 'http'

//const envData = dotenv.config().parsed;
dotenv.config()
let portNumber = process.env.PORT || 3001
//let portNumber = envData.PORT || 3001

const app = express()

app.use(json())
app.use(cors())

const data = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hellow Node');
})
console.log('hi')

app.listen(portNumber, () => {
    console.log(`Listning to port: ${portNumber}`);
})