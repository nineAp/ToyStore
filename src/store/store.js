import {configureStore } from '@reduxjs/toolkit'
import toySlice  from './ToySlice'
import categorySlice  from './CategorySlice'
import logger from 'redux-logger'
import cartSlice from './CartSlice'
import feedbackSlice  from './FeedbackSlice'

export default configureStore({
    reducer: {
        toys: toySlice,
        cats: categorySlice,
        cart: cartSlice,
        feedback: feedbackSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger)
})