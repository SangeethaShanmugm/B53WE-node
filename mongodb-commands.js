// show dbs => list all dbs
// use dbName => create and switch to dbName
// db => current db

db.products.insertMany([
    {
        "name": "iPhone 15 (128 GB)",
        "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
        "price": "₹77,900 ",
        "rating": 3,
        "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
    },
    {
        "name": "iPhone 15 Pro (128 GB)",
        "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
        "price": "₹1,34,900 ",
        "rating": 3.5,
        "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
    },
    {
        "name": "Samsung Galaxy S23 5G (256GB Storage)",
        "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
        "price": "₹65,320",
        "rating": 4.7,
        "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
    },
    {
        "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage)",
        "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
        "price": "₹1,00,000",
        "rating": 5.0,
        "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."
    },
    {
        "name": "Apple AirPods Pro​",
        "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
        "price": "₹20,999 ",
        "rating": 4.8,
        "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
    },
    {
        "name": "Apple Watch Series 9 [GPS + Cellular 41mm]",
        "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
        "price": "₹75,900 ",
        "rating": 4.9,
        "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
    },
    {
        "name": "Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
        "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
        "price": "₹22,999",
        "rating": 4.5,
        "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
    },
    {
        "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
        "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
        "price": "₹27,141",
        "rating": 4.3,
        "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
    },
    {
        "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
        "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
        "price": "₹84,990",
        "rating": 5.0,
        "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
    },
    {
        "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
        "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
        "price": "₹1,10,790",
        "rating": 4.9,
        "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
    }
])

db.products.find().pretty()

//rating > 4.5

db.products.find({ rating: { $gt: 4.5 } }).pretty()


//rating <= 3.7

db.products.find({ rating: { $lte: 3.7 } }).pretty()

//projection

//inclusion  =  1

db.products.find({}, { name: 1, price: 1 }).pretty()

//avoid _id => ✅

db.products.find({}, { _id: 0, name: 1, price: 1 }).pretty()

//inclusion + exclusion => ❌
db.products.find({}, { name: 0, price: 1 }).pretty()

//exclusion = 0
db.products.find({}, { name: 0, price: 0 }).pretty()

//sort 

//asc => 1

db.products.find({ rating: { $gt: 4.5 } }).sort({ rating: 1 }).pretty()

//desc => -1

db.products.find({ rating: { $gt: 4.5 } }).sort({ rating: -1 }).pretty()

//limit

db.products.find({ rating: { $gt: 4.5 } }).sort({ rating: -1 }).limit(2).pretty()

//skip
db.products.find({ rating: { $gt: 4.5 } }).sort({ rating: -1 }).limit(2).skip(1).pretty()

//find the iphone 15


db.products.findOne({ name: "iPhone 15 (128 GB)" })

//find => name: include, rating: include, sort => rating =>desc, name =asc

db.products.find({}, { name: 1, rating: 1 }).sort({ rating: -1, name: 1 }).pretty()

db.products.find({}, { name: 1, rating: 1 }).sort({ rating: -1 }).pretty()

//aggregation 

db.orders.insertMany([
    { _id: 0, productName: "Steel Beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel Beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel Beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron Rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron Rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron Rod", status: "urgent", quantity: 10 },
])


db.orders.find().pretty()

//match urgent products
//select sum(quantity) from orders where  status= "urgent"

//group based on productName and sum its quantity
// group by productName


//stage - 1
db.orders.aggregate([{ $match: { status: "urgent" } }])


//stage-2

//aggregation pipepline
db.orders.aggregate([
    //stage-1 => match urgent products
    { $match: { status: "urgent" } },
    //stage-2 => group based on productName and sum its quantity
    { $group: { _id: "$productName", totalUrgentQuantity: { $sum: "$quantity" } } }
])


//update category: "electronics"

db.products.updateMany({}, { $set: { category: "electronics" } })

// update category: "laptop" for "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)"

db.products.updateOne({ "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)" }, { $set: { category: "laptop" } })

db.products.findOne({ "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)" })



// update category: "accessories" for "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White"

db.products.updateOne({ "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White" }, { $set: { category: "accessories" } })


db.products.findOne({ "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White" })


// update category: "accessories" for "Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)"


//find all products with name containing the word "Samsung"

db.products.find({ name: { $regex: /Samsung/ } }).pretty()

db.products.find({ name: { $regex: /Samsung/i } }).pretty()


//delete all products with rating > 4.9

db.products.find({ rating: { $gt: 4.9 } }).pretty()


db.products.deleteMany({ rating: { $gt: 4.9 } })



db.products.find({ rating: { $gt: 4.5 } }).pretty()


db.products.deleteOne({ rating: { $gt: 4.5 } })


//basic cursor methods =>map, toArray, pretty, forEach, limit, sort, count

//cursor => pointer

var myCursor = db.orders.find({ _id: 5 }).pretty()


//orders with productName => Steel Beam

var myCursor = db.orders.find({ productName: "Steel Beam" }).pretty()



var myCursor = db.orders.find().pretty()


//next()

var myCursor = db.orders.find({ _id: { $gt: 3 } }).pretty()

while (myCursor.hasNext()) {
    print(tojson(myCursor.next()))
}


//forEach


var myCursor = db.orders.find({ _id: { $gt: 3 } }).pretty()
myCursor.forEach(printjson)


var myCursor = db.orders.find()

myCursor.forEach(function (product) {
    print(`Product Name: ${product.productName}, Quantity: ${product.quantity}`)
})


//count 

db.orders.find().count()

//toArray


var allOrders = db.orders.find()

var allOrders = db.orders.find().toArray()

//map


var listProducts = db.orders.find().limit(2).map(function (data) {
    return data.productName
})



var listProducts = db.orders.find().map(function (data) {
    return data.quantity * 100
})


//lookups


db.order.insertMany([
    { "_id": 1, "item": "almonds", "price": 12, "quantity": 2 },
    { "_id": 2, "item": "pecans", "price": 20, "quantity": 1 },
    { "_id": 3 }
])


db.inventory.insertMany([
    { "_id": 1, "sku": "almonds", "description": "product 1", "instock": 120 },
    { "_id": 2, "sku": "bread", "description": "product 2", "instock": 80 },
    { "_id": 3, "sku": "cashews", "description": "product 3", "instock": 60 },
    { "_id": 4, "sku": "pecans", "description": "product 4", "instock": 70 },
    { "_id": 5, "sku": null, "description": "Incomplete" },
    { "_id": 6 }
])



db.order.aggregate([
    {
        $lookup:
        {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: "inventory_docs"
        }
    }
])



