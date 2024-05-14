import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {pokemonService} from "../../services";

const initialState = {
    pokemons: [],
    pokemon: [],
    total_count: null,
    next: null,
    previous: null
};

const getAllPokemons = createAsyncThunk(
    'pokemonSlice/getAllPokemons',
    async (params, {rejectedWithValue}) => {
        try {
            const {data} = await pokemonService.getAll(params);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const getPokemonById = createAsyncThunk(
    'pokemonSlice/getPokemonById',
    async (id, {rejectedWithValue}) => {
        try {
            const {data} = await pokemonService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllPokemons.fulfilled, (state, action) => {
                state.pokemons = action.payload.results
                state.total_count = action.payload.count
                state.previous = action.payload.previous
                state.next = action.payload.next
            })
            .addCase(getPokemonById.fulfilled, (state, action) => {
                state.pokemon = action.payload
            }),


});

const {reducer: pokemonReducer} = pokemonSlice;

const pokemonAction = {
    getAllPokemons,
    getPokemonById,
};

export {
    pokemonReducer,
    pokemonAction
};