import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookDetailsPage from './components/BookDetailsPage';
import Cart from './components/Cart';
import './App.css'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './AdminDashboard';





const App = () => {
  const location = useLocation();
  const [state,setState] = useState({})


  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

   

    </Routes>


    {location.pathname !== '/admin-login' && location.pathname !== '/admin-dashboard' && <Footer />}

  </div>
);
};

const Main = () => (
<Router>
  <App />

</Router>
);

export default Main;