const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({product: newProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.findAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json({products: allProducts}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(oneProduct => res.json({product: oneProduct}))
        .catch(err => res.json({message: 'Something went wrong', error: err}))
}