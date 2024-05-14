import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {typeService} from "../../services";

const initialState = {
    type: []
};

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
            }),


});

const {reducer: typeReducer} = typeSlice;

const typeAction = {
    getTypeById
};

export {
    typeReducer,
    typeAction
};