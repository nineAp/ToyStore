import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartToys: [],
        count: 0,
        totalPrice: 0,
    },
    reducers: {
        addToy: (state, action) => {
            if(!state.cartToys.includes(action.payload)) {
                state.cartToys.push(action.payload)
            }
            state.count = state.cartToys.length
            state.totalPrice += action.payload.price
        },

        removeToy: (state, action) => {
            state.cartToys = state.cartToys.filter((cartToy) => cartToy.id !== action.payload.id)
            state.count = state.cartToys.length
            state.totalPrice -= action.payload.price
        }
    }
})

export const {addToy, removeToy} = cartSlice.actions
export default cartSlice.reducer