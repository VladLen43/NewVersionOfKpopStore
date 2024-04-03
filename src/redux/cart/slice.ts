import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../utils/getCartFromLS";
import { cartSliceItem, cartSliceState } from "./types";
import { calcTotalPrice } from "../utils/calcTotalPrice";

const {items , totalPrice} = getCartFromLS();

const initialState : cartSliceState  = { 
   items: items, 
   totalPrice: totalPrice,
  }
 

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addItem (state, action : PayloadAction<cartSliceItem>) {
    const findItem = state.items.find(obj => obj.id === action.payload.id);
    if(findItem) {
        findItem.count++;
    } else {
        state.items.push({
            ...action.payload,
            count: 1,
        });
    }
    state.totalPrice = calcTotalPrice(state.items);
   },
   deleteItem: (state, action: PayloadAction<string>) => {
    state.items = state.items.filter(item => item.id !== action.payload);
   if(state.items.length === 0) {
    state.totalPrice = 0;
   }
    },
    minusItem: (state, action: PayloadAction<cartSliceItem>) => {
        const findItem = state.items.find((obj) => obj.id === action.payload.id);
        if(findItem) {
            if(findItem.count > 1) {
            findItem.count--;
            }
        } else{
            //state.items = state.items.filter(obj => obj.id !== action.payload);
            // Забавная ошибка с каунтом пока что не допер как ее исправить
        }
    },
    clearCart: (state) => {
        state.items = [];
        state.totalPrice = 0;
    }
}
})

// Action creators are generated for each case reducer function
export const {addItem, deleteItem, minusItem, clearCart} = cartSlice.actions

export default cartSlice.reducer