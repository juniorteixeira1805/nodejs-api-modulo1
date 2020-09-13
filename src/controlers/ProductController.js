const mongoose = require('mongoose')

const Product = mongoose.model('product')

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query // Está sendo recebido da query, o parametro de pagina que o usuario está na url
        // utilizando o mongoose-paginate para separa uma quantidade de 10 objetos por pagina. Primeiro parametro é p numero da pagina e o segundo é a quantdade de objetos
        const products = await Product.paginate({ page: page, limit: 10}) // Caso exista 11 models, na pag 1 é exibido 10 e na 2 apenas 1
        return res.json(products)
    },

    async show(req, res){
        const product = await Product.findById()

        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send('Product removido!');
    }
}