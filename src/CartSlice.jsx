import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const {cost,name,image} = action.payload
    const exting = state.items.find(item => item.name === name)
    if(exting) {
        exting.quantity++
    }
    else{
        state.items.push({cost,image,name,quantity:1})
    }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item =>item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
    const {name,quantity} = action.payload
    const update = state.items.find(item => item.name === name)
    if(update) {
        update.quantity = quantity
    }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
