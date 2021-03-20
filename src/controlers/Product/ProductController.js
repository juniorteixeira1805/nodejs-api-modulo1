const ProductClass = require('./ProductClass')

module.exports = {
    async index(req, res){
        const product = new ProductClass();
        return await product.buscarTodosProduct(req.query)
    },

    async show(req, res){
        const product = new ProductClass();
        return await product.buscarUmProduct(req.body.parametroDeBusca, req.body.idetificador)
    },

    async store(req, res){
        const product = new ProductClass();
        return await product.cadastrarProduct(req.body)
    },

    async update(req, res){
        const product = new ProductClass();
        return await product.editarProduct(req.body.id, req.body)
    },

    async destroy(req, res){
        const product = new ProductClass();
        return await product.DeletarProduct(req.body)
    }
}