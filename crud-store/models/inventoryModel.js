const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const InventorySchema = new Schema({
    item: String,
    price: Number,
    inStock: Boolean 
})

module.exports = mongoose.model("Inventory", InventorySchema)