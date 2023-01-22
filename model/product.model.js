const { Schema, model } = require('mongoose');

const dataSchema = Schema({
    name: String,
    image: String,
    category: String,
    ram: String,
    brand: String,
    processor: String,
    frontCamera: String,
    rearCamera: String,
    releaseDate: String,
    price: Number,
    pricelink: String
})

let post = {
    "name": "phone", "image": "this is image", "category": "A", "ram": "23gb", "brand": "mi", "processor": "snapdragon", "frontCamera": "45px",
    "rearCamera": "43px",
    "releaseDate": "4nov23",
    "price": "23000",
    "pricelink": "this is price"
}

const DataModel = model('products', dataSchema);

module.exports = { DataModel };