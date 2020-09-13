const mongoose = require('mongoose')
// mongoose-paginate é utilizado para auxiliar na listagem dos models
const mongoosePaginate = require('mongoose-paginate')


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

// Definido o pluglin para poder utilizar a função paginate
ProductSchema.plugin(mongoosePaginate)

mongoose.model('product', ProductSchema)