import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadBooks } from '../components/redux/booksSlice';
import { addToCart } from '../components/redux/cartSlice';
import './HomePage.css';
import axios from 'axios';

const HomePage = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books);
    const purchasedBooks = useSelector(state => state.books.purchasedBooks);

    const [state,setState] = useState([])
  
    useEffect(() => {
      // dispatch(loadBooks(books));
    }, [dispatch, books]);


    useEffect(()=>{
      getData()
    },[])
      const getData = async() => {
        try {
          const {data} = await axios.get("https://books-add-cart.onrender.com/product");
          const arr = data.response_data.slice(0,5)
          setState(arr)
          dispatch(loadBooks(arr))
          console.log(data.response_data);
          
        } catch (error) {
          console.log(error);
          
        }
       
      }
  
    const availableBooks = books.filter(book => !purchasedBooks.includes(book.id));
  
    return (
      <div className="home-page , container ">
        <h2 style={{fontWeight:"500", fontFamily:"italic", color:"white", paddingTop:"25px"}}>Book List</h2>
        <div className="book-list">
          {state?.map(book => (
            <div key={book.id} className="book-card">
                <img src={book.image} alt={book.title} className="book-image" /> 
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <p>₹{book.price}</p>
              <button  type="button" class="btn btn-primary" onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
              <Link to={`/book/${book.id}`}>
                <button   type="button" class="btn btn-outline-warning">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default HomePage;
