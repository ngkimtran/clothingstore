import { UserCartPropsType } from "./../../types/DataTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  products: Array<UserCartPropsType>;
}

const initialState: cartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<UserCartPropsType>) => {
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (item) item.quantity += action.payload.quantity;
      else state.products.push(action.payload);
    },

    removeFromCart: (state, action: { payload: { id: number } }) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },

    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
