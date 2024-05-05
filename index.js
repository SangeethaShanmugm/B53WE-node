// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"

import cors from "cors"
import * as dotenv from 'dotenv'
dotenv.config()
import { productsRouter } from "./routes/products.js"
import { usersRouter } from "./routes/users.js";
const app = express()
const PORT = 5000

//Inbuilt middleware =>  say data is in json => converting body to json
app.use(express.json())
app.use(cors())
// console.log(process.env.MONGO_URL)

//mongo connection 

const MONGO_URL = process.env.MONGO_URL
// 'mongodb://127.0.0.1:27017'
//'mongodb://localhost:27017';

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect()
    console.log("Mongodb is connected")
    return client
}

export const client = await createConnection()

app.get('/', (req, res) => {
    res.send('Hello Everyone')
})


app.use("/products", productsRouter)

app.use("/users", usersRouter)



app.listen(PORT, () => console.log(`Server started on the PORT, ${PORT}`))



