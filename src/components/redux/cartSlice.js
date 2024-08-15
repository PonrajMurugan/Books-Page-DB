import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); 
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; 
        } else {
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    completeOrder(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, completeOrder } = cartSlice.actions;
export default cartSlice.reducer;
