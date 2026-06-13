import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },

  reducers: {
    addToCart: (state, action) => {
        const existing=state.cartItems.find(
            (items)=>(
            items.productId===action.payload.productId &&
            items.size===action.payload.size

        ));
        if(existing){
            existing.quantity+=1;
        }
        else{
            state.cartItems.push(action.payload);
        }
      
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, index) => index !== action.payload,
      );
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;

      state.cartItems[index].quantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
