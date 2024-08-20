import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
       
        const response = await axios.get('https://books-add-cart.onrender.com/apiuser'); 
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);  
       
      }
    };

    fetchOrderDetails();
  }, [navigate]);

  return (
    <div className="order-confirmation container">
      <h1>Order Confirmation</h1>
      {orderDetails ? (
        <div>
          <h2>Thank you for your purchase!</h2>
          <p><strong>Order ID:</strong> {orderDetails.id}</p>
          <p><strong>Name:</strong> {orderDetails.name}</p>
          <p><strong>Price:</strong> ₹ {orderDetails.price}</p>
          <p><strong>Address:</strong> {orderDetails.address}</p>
          <p><strong>Email:</strong> {orderDetails.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
