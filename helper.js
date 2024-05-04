import { client } from "./index.js";

export async function getAllProducts(query) {
    return await client.db("b53we-node").collection("products").find(query).toArray();
}
export async function getProductById(id) {
    return await client.db("b53we-node").collection("products").findOne({ id: id });
}
export async function addProducts(newProduct) {
    return await client.db("b53we-node").collection("products").insertMany(newProduct);
}
export async function deleteProductById(id) {
    return await client.db("b53we-node").collection("products").deleteOne({ id: id });
}

export async function updateProductById(id, updatedProduct) {
    return await client.db("b53we-node").collection("products").updateOne(
        { id: id },
        { $set: updatedProduct });
}
