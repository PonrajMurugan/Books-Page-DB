import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

const initialState = {
  books: booksData,
  purchasedBooks: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    purchaseBook(state, action) {
      const bookId = action.payload.id;
      state.purchasedBooks.push(bookId);
      state.books = state.books.filter(book => book.id !== bookId);
    },
    loadBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const { purchaseBook, loadBooks } = booksSlice.actions;
export default booksSlice.reducer;
