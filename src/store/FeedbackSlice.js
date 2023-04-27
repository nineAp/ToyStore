import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FeedbackService from "../APIServices/FeedbackService";


export const setFeedbacks = createAsyncThunk(
    'feedbacks/getFeedback',
    async() => {
        const response = await FeedbackService.getAll()
        return response
    }
)


export const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        feedbacks: [],
        loading: true
    },
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder.addCase(setFeedbacks.pending, state => {
            state.loading = true
        })

        builder.addCase(setFeedbacks.fulfilled, (state, action) => {
            state.feedbacks = action.payload
            state.loading = false
        })
    }
})

export default feedbackSlice.reducer