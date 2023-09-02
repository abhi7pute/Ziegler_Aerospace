const Product = require('../models/Product'); // Import your Product model

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, sellerId } = req.body;

    // Create a new product
    const product = new Product({ name, description, price, sellerId });

    // Save product to the database
    await product.save();

    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a list of products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('sellerId', 'name'); // Populate seller details

    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Other product-related controller functions (e.g., updateProduct, deleteProduct) can be added similarly.
