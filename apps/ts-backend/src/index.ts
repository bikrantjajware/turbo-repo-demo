import express from 'express';
import  { DB_URL } from "@repo/common/config";

console.log({DB_URL})

const app = express()

app.get('/ping', (req, res) => {
    res.status(200).json({ message: "pong"}) 
})

app.get('', (req, res) => {
    res.status(200).json({ message: "server is running" + new Date().toString() })
})

app.listen(3002, ()=>{
    console.log('listening on port 3002')
})
