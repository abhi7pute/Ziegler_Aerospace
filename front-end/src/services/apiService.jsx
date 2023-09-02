// services/apiService.js

import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Replace with your actual backend server URL

// Function to handle user registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch product listings
export const fetchProductListings = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to add a product to the cart
export const addToCart = async (productId) => {
  try {
    const response = await axios.post(`${baseURL}/api/cart/add`, { productId });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to send a message to a seller
export const sendMessageToSeller = async (sellerId, message) => {
  try {
    const response = await axios.post(`${baseURL}/api/messages/send`, { sellerId, message });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to process payment
export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${baseURL}/api/payment/process`, paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
