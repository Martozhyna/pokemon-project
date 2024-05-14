import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {abilityService} from "../../services";

const initialState = {
   ability: []
};

const getAbilityById = createAsyncThunk(
    'abilitySlice/getAbilityById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await abilityService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const abilitySlice = createSlice({
    name: 'abilitySlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAbilityById.fulfilled, (state, action) => {
                state.ability = action.payload
            }),


});

const {reducer: abilityReducer} = abilitySlice;

const abilityAction = {
    getAbilityById
};

export {
    abilityReducer,
    abilityAction
};