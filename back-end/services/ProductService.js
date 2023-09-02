const Product = require('/../models/Product');

class ProductService {
  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  }

  async addProduct(productData) {
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductService();
