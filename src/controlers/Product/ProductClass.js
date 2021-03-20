const mongoose = require('mongoose')

const Product = mongoose.model('product')

class Produtos {

    constructor() {}

    cadastrarProduct = async function(body) {
        if(!body.title) return {error: 'title not informed!'}
        if(!body.description) return {error: 'description not informed!'}
        if(!body.url) return {error: 'url not informed!'}
        
        try {
            return await Product.create(body);
        } catch (error) {
            console.error(error)
            return {error: 'an error has occurred!'}
        }
    }

    buscarTodosProduct = async function(query) {
        if(!query) return {error: 'an error has occurred!'}
        const { page = 1 } = query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
        try {
            return await Product.paginate({},{ page: page, limit: 10})
        } catch (error) {
            console.error(error)
            return {error: 'an error has occurred!'}
        }
    }

    buscarUmProduct = async function(id) {
        if(!id) return {error: 'id not informed!'}

        try {
            return await Product.findById(id)
        } catch (error) {
            console.error(error)
            return {error: 'an error has occurred!'}
        }
    }

    editarProduct = async function(id, body) {
        if(!id) return {error: 'id not informed!'}
        if(!body) return {error: 'body not informed!'}
        
        try {
            return await Product.findByIdAndUpdate(id, body, {new: true});
        } catch (error) {
            console.error(error)
            return {error: 'an error has occurred!'}
        }
    }

    DeletarProduct = async function(id) {
        if(!id) return {error: 'id not informed!'}
        
        try {
            await Product.findByIdAndRemove(id);
            return {success: "successfully deleted"}
        } catch (error) {
            console.error(error)
            return {error: 'an error has occurred!'}
        }
    }
}

module.exports = Produtos;