import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../components/redux/cartSlice';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="book-details-page , container">
       <h4 style={{color:"white", fontWeight:"900" , marginTop:"10px"}}>{book.title}</h4>
      <img src={book.image} alt={book.title} className="book-images" />      
      <p style={{color:"white"}}>Author : {book.author}</p>
      <p style={{color:"white"}}>Price : ₹ {book.price}</p>
      <p style={{color:"white"}}>Description : {book.description}</p>
      <button  type="button" class="btn btn-success" onClick={() => dispatch(addToCart(book))}>Add to Cart</button>
    </div>
  );
};

export default BookDetailsPage;
