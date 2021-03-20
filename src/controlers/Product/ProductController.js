const Produtos = require('./ProductClass')

module.exports = {
    async index(req, res){
        try {
            const product = new Produtos();
            return res.status(200).send(await product.buscarTodosProduct(req.query));
        } catch (error) {
            console.log(error)
            return res.status(400).send({erro: error});
        }
    },

    async show(req, res){
        try {
            const product = new Produtos();
            return res.status(200).send(await product.buscarUmProduct(req.params.id));
        } catch (error) {
            console.log(error)
            return res.status(400).send({erro: error});
        }
    },

    async store(req, res){
        try {
            const product = new Produtos();
            return res.status(200).send(await product.cadastrarProduct(req.body));
        } catch (error) {
            console.log(error)
            return res.status(400).send({erro: error});
        }
    },

    async update(req, res){
        try {
            const product = new Produtos();
            return res.status(200).send(await product.editarProduct(req.params.id, req.body));
        } catch (error) {
            console.log(error)
            return res.status(400).send({erro: error});
        }
    },

    async destroy(req, res){
        try {
            const product = new Produtos();
            return res.status(200).send(await product.DeletarProduct(req.params.id));
        } catch (error) {
            console.log(error)
            return res.status(400).send({erro: error});
        }
    }
}