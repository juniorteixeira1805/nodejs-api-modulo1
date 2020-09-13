const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    CreatedAt :{
        type: Date,
        default: Date.now
    }
})

mongoose.model('product', ProductSchema)