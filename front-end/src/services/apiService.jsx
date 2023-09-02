

import axios from 'axios';

const baseURL = 'http://localhost:5000'; 

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${baseURL}/api/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchProductListings = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const addToCart = async (productId) => {
  try {
    const response = await axios.post(`${baseURL}/api/cart/add`, { productId });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const sendMessageToSeller = async (sellerId, message) => {
  try {
    const response = await axios.post(`${baseURL}/api/messages/send`, { sellerId, message });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${baseURL}/api/payment/process`, paymentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
