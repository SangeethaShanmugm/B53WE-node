import { client } from "./index.js";
import bcrypt from "bcrypt";


async function getAllProducts(query) {
    return await client.db("b53we-node").collection("products").find(query).toArray();
}
async function getProductById(id) {
    return await client.db("b53we-node").collection("products").findOne({ id: id });
}
async function addProducts(newProduct) {
    return await client.db("b53we-node").collection("products").insertMany(newProduct);
}
async function deleteProductById(id) {
    return await client.db("b53we-node").collection("products").deleteOne({ id: id });
}

async function updateProductById(id, updatedProduct) {
    return await client.db("b53we-node").collection("products").updateOne(
        { id: id },
        { $set: updatedProduct });
}


async function genPassword(password) {
    const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
    console.log(salt);
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword);
    return hashedPassword
}

async function createUser(username, hashedPassword) {
    return await client.db("b53we-node").collection("users")
        .insertOne({ username: username, password: hashedPassword });
}



async function getUserByName(username) {
    return await client.db("b53we-node").collection("users")
        .findOne({ username: username });
}


export { getAllProducts, getProductById, addProducts, deleteProductById, updateProductById, genPassword, createUser, getUserByName }