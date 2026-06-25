import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    
    cartItems: JSON.parse(localStorage.getItem("cartItems"))||[]
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
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
      
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, index) => index !== action.payload,
      );
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;

      state.cartItems[index].quantity = quantity;
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
