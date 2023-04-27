import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ToyService from "../APIServices/ToyService";


export const setToys =  createAsyncThunk(
    'toys/fetchToys',
    async () => {
        const response = await ToyService.getAll()
        return response
    }
)


export const setSingleToy = createAsyncThunk(
    'toys/fetchToy',
    async (id) => {
        const response = await ToyService.getById(id)
        return response
    }
)


export const toySlice = createSlice({
    name: 'toys',
    initialState: {
        toys: [],
        loading: true,
        pages: 1,
        toy: [],
        singleToyLoading: true,
        singleToyExist: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(setToys.pending, state  => {
            if(state.toys.length === 0) {
                state.loading = true
                state.singleToyExist = true
            } else {
                state.loading = false
                state.singleToyExist = true
            }
        })
        builder.addCase(setToys.fulfilled, (state, action) => {
            state.toys = action.payload
            state.pages = Math.ceil(state.toys.length/9)
            state.loading = false
        })
        builder.addCase(setSingleToy.pending, state => {
            state.singleToyLoading = true
        })
        builder.addCase(setSingleToy.fulfilled, (state, action) => {
            state.toy = action.payload
            state.singleToyLoading = false
        })
        builder.addCase(setSingleToy.rejected, (state, action) => {
            state.singleToyExist = false
        })
    },
}) 


export default toySlice.reducer