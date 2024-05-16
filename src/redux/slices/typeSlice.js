import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {pokemonService, typeService} from "../../services";

const initialState = {
    type: [],
    types: [],
    total_count: null,
    next: null,
    previous: null
};

const getAllTypes = createAsyncThunk(
    'pokemonSlice/getAllTypes',
    async (params, {rejectedWithValue}) => {
        try {
            const {data} = await typeService.getAllType(params);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getTypeById = createAsyncThunk(
    'typeSlice/getTypeById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await typeService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const typeSlice = createSlice({
    name: 'typeSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getTypeById.fulfilled, (state, action) => {
                state.type = action.payload
            })
            .addCase(getAllTypes.fulfilled, (state, action) => {
                state.types = action.payload.results
                state.total_count = action.payload.count
                state.previous = action.payload.previous
                state.next = action.payload.next
            })


});

const {reducer: typeReducer} = typeSlice;

const typeAction = {
    getTypeById,
    getAllTypes
};

export {
    typeReducer,
    typeAction
};