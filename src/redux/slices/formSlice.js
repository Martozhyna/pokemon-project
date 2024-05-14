import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {formService} from "../../services";

const initialState = {
    form: []
};

const getFormById = createAsyncThunk(
    'formSlice/getFormById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await formService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getFormById.fulfilled, (state, action) => {
                state.form = action.payload
            }),


});

const {reducer: formReducer} = formSlice;

const formAction = {
    getFormById
};

export {
    formReducer,
    formAction
};