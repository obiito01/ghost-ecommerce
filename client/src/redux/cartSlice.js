import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const calculateQuantity = (state) => {
  let count = 0;
  for (let i = 0; i < state.products.length; i++) {
    count = count + state.products[i].quantity;
  }
  return count;
};
const calculateTotal = (state) => {
  let total = 0;
  for (let i = 0; i < state.products.length; i++) {
    total += state.products[i].price * state.products[i].quantity;
  }
  total = (Math.round(total * 100) / 100).toFixed(2);
  return total;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity = calculateQuantity(state);
      state.total = calculateTotal(state);
    },

    //update cartitem quantity
    updateProduct: (state, action) => {},

    //clear whole cart item
    clearProduct: (state, action) => {
      state.products.splice(action.payload, 1);
      state.quantity = calculateQuantity(state);
      state.total = calculateTotal(state);
    },

    //clear cart
    clearCart: (state, action) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, clearProduct, updateProduct, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
