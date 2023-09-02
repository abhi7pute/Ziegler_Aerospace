const Product = require('../models/Product'); 
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, sellerId } = req.body;

    const product = new Product({ name, description, price, sellerId });

    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('sellerId', 'name'); // Populate seller details

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

