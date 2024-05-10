import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {pokemonReducer} from "./slices";

const rootReducer = combineReducers({
    pokemons: pokemonReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};