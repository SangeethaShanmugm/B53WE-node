// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = 5000

//Inbuilt middleware =>  say data is in json => converting body to json
app.use(express.json())

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

const client = await createConnection()

app.get('/', (req, res) => {
    res.send('Hello Everyone')
})


// /products => get all products ✅
// /products?category=laptop => filter based on category ✅
// /products?rating=5  => filter based on rating ✅
// /products?category=laptop&rating=5  =>  filter based on category and then rating ✅

app.get('/products', async (req, res) => {
    const { category, rating } = req.query
    console.log(req.query, category, rating)

    try {
        let query = {} //empty query object
        if (category) {
            query.category = category
        } if (rating) {
            query.rating = +rating
        }
        const filteredProducts = await client.db("b53we-node").collection("products").find(query).toArray()

        if (filteredProducts.length > 0) {
            res.send(filteredProducts)
        }
        else {
            res.status(404).send({ message: "Product Not found for specified criteria" })
        }

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

//particular product

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    try {
        //db.products.findOne({ id: id })
        const product = await client.db("b53we-node").collection("products").findOne({ id: id })
        // const product = await products.find((pd) => pd.id === id)
        if (product) {
            res.send(product)
        } else {
            res.status(404).send({ message: "Product Not Found" })
        }

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})

//add products


app.post('/products', async (req, res) => {
    const newProduct = req.body
    console.log(newProduct)
    const result = await client.db("b53we-node").collection("products").insertMany(newProduct)
    res.send(result)

})

//delete product

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    const product = await client.db("b53we-node").collection("products").deleteOne({ id: id })
    res.send(product)

})

app.listen(PORT, () => console.log(`Server started on the PORT, ${PORT}`))