const Product = require('./../models/product.model')

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

// TODO create CRUD controllers
// get all
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err))
}

// get one with params
module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

// create -> add to database
module.exports.newProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

// update one using params
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(message => res.json(message))
        .catch(err => res.status(400).json(err))
}