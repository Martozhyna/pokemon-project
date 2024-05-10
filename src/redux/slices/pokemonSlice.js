import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../services";

const initialState = {
    pokemons: [],
    pokemon: [],
};

const getAllPokemons = createAsyncThunk(
    'pokemonSlice/getAllPokemons',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await pokemonService.getAll();
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