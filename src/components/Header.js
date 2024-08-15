import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import './Header.css';

const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        
        <Link to="/">
        <i className="fas fa-book"></i> 
          BookStore
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"><b>Home</b></Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <div className="cart-icon-container">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span className="cart-count">{cartCount}</span>
              </div>
              
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
