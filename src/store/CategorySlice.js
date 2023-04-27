import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoryService from "../APIServices/CategoryService";


export const setCategory = createAsyncThunk(
    'categories/fetchCats',
    async() => {
        const response = await CategoryService.getAll()
        return response
    }
)

export const setSelectedCategory = createAsyncThunk(
    'categories/fetchSelectedCats',
    async(id) => {
        const response = await CategoryService.getById(id)
        return response
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        selectedCategory: [],
        loading: true,
        selectedLoading: true,
        selectedCatPages: 1,
        selectedCatExits: true,
    },
    extraReducers: (builder) => {
        builder.addCase(setCategory.pending, (state) => {
            if(state.categories.length === 0) {
                state.loading = true
            } else {
                state.loading = false
            }
        })
        builder.addCase(setCategory.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false
        })

        builder.addCase(setSelectedCategory.pending, (state) => {
            state.selectedLoading = true
            state.selectedCatExits = true
        })

        builder.addCase(setSelectedCategory.fulfilled, (state, action) => {
            state.selectedCategory = action.payload
            state.selectedCatPages = Math.ceil(state.selectedCategory.toys.length/9)
            state.selectedLoading = false
        })
        
        builder.addCase(setSelectedCategory.rejected, state => {
            state.selectedCatExits = false
        })
    }
})


export default categorySlice.reducer