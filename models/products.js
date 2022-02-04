const mongoose = require ("mongoose");



const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    instock: {
        type: Boolean,
      
    }

}, { timestamps: true })

const Products = new mongoose.model("Products", productsSchema)

module.exports = Products;