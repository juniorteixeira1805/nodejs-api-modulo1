const mongoose = require('mongoose')

const Product = mongoose.model('product')

module.exports = {
    async index(req, res){
        const products = await Product.find()
        return res.json(products)
    }
}