const mongoose = require('mongoose')

const Product = mongoose.model('product')


class Product {

    constructor() {}

    cadastrarProduct = async function(body) {
        if(!body.title) return res.status(400).send({error: 'title not informed!'})
        if(!body.description) return res.status(400).send({error: 'description not informed!'})
        if(!body.url) return res.status(400).send({error: 'description not informed!'})
        
        try {
            const product = await Product.create(body);
            return res.status(200).send(json(product));
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'an error has occurred!'})
        }
    }

    buscarTodosProduct = async function(query) {
        if(!query) return res.status(400).send({error: 'query not informed!'})
        const { page = 1 } = query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
        
        try {
            // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
            const products = await Product.paginate({ page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
            return res.status(200).send(json(products));
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'an error has occurred!'})
        }
    }

    buscarUmProduct = async function(parametroDeBusca, idetificador) {
        if(!idetificador) return res.status(400).send({error: 'query not informed!'})
        if(!parametroDeBusca) return res.status(400).send({error: 'query not informed!'})

        if(parametroDeBusca != "title" || parametroDeBusca != "descripition" || parametroDeBusca != "url" || parametroDeBusca != "_id") return res.status(400).send({error: 'invalid parameter!'})

        try {
            const product = await Product.findById({parametroDeBusca: idetificador})
            return res.status(200).send(json(product));
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'an error has occurred!'})
        }
    }

    editarProduct = async function(id, body) {
        if(!id) return res.status(400).send({error: 'query not informed!'})
        if(!body) return res.status(400).send({error: 'query not informed!'})
        
        try {
            const product = await Product.findByIdAndUpdate(id, body, {new: true});
            return res.status(200).send(json(product));
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'an error has occurred!'})
        }
    }

    DeletarProduct = async function(id) {
        if(!id) return res.status(400).send({error: 'query not informed!'})
        
        try {
            await Product.findByIdAndRemove(req.params.id);
            return res.status(200).send(json(product));
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'an error has occurred!'})
        }
    }
}

module.exports = UsuarioController;