import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, completeOrder } from '../components/redux/cartSlice';
import './Cart.css';
import axios from 'axios';

const Cart = ({ cart, removeFromCart, completeOrder }) => {
  const [userDetails, setUserDetails] = useState({ name: '', address: '', email: '' });
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handle();
    
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handle = async () => {
   const body =  {
      "id":1,
         "name":userDetails.name,
         "price":totalPrice,
         "address": userDetails.address,
         "email":userDetails.email
    }

    try {
      
    const data = await axios.post("https://books-add-cart.onrender.com/apiuser",body);
    if( data.response == "success"){
      alert('Order successfully purchased!');
    }else{
      alert('Something Went Wrong');
    }
   
    } catch (error) {
      
    }

  }


  const validateForm = () => {
      return (
      userDetails.name &&
      userDetails.address &&
      userDetails.email &&
      paymentDetails.cardNumber &&
      paymentDetails.expiryDate &&
      paymentDetails.cvv
    );
  };

  return (
    <div className="cart-pages , container">
      <h1 style={{marginTop:"40px"}}>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className='un'>
            {cart.map((item) => (
              <li key={item.id}>
                 <img src={item.image} alt={item.title} className="cart-item-image" />
                {item.title} - ₹ {item.price}  x {item.quantity}
                <button  style={{marginLeft:"25px"}} type="button" class="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          
          <h3 style={{color: 'white'}}>Total:  ₹ {totalPrice.toFixed(2)}</h3>
          <form className="user-details-form" onSubmit={handleSubmit}>
            <h2 style={{color: 'white'}}>User Details</h2>
            <div>
              <label style={{color: 'white'}}>Name:</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                required
              />
            </div>
            <div>
              <label style={{color: 'white'}}>Address:</label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleUserDetailsChange}
                required
              />
            </div>
            <div>
              <label style={{color: 'white'}}>Email:</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                required
              />
            </div>
            <h2 style={{color: 'white'}}>Payment Details</h2>
            <div>
              <label style={{color: 'white'}}>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div>
              <label style={{color: 'white'}}>Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <div>
              <label style={{color: 'white'}}>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentDetailsChange}
                required
              />
            </div>
            <button type="submit">Complete Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  completeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
