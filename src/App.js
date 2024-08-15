import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookDetailsPage from './components/BookDetailsPage';
import Cart from './components/Cart';
import './App.css'; 
import axios from 'axios';
import { useEffect, useState } from 'react';


const App = () => {
  const location = useLocation();
  const [state,setState] = useState({})
  const isCartRoute = location.pathname === '/cart';
  const containerClass = isCartRoute ? 'bk cart-page' : 'bk';

  return (
    <div className={containerClass}>
       <Header />
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;