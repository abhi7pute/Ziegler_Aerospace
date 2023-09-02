import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart items from the server on component mount
  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get('/api/cart'); // Replace with your actual API endpoint
        const { items, total } = response.data;
        setCartItems(items);
        setTotalPrice(total);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    }

    fetchCartItems();
  }, []);

  // Function to remove an item from the cart
  const removeItemFromCart = async (itemId) => {
    try {
      await axios.delete(`/api/cart/${itemId}`); // Replace with your actual API endpoint
      // Update cart items after deletion
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeItemFromCart(item._id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total Price: ${totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
