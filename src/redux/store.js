import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {abilityReducer, pokemonReducer, typeReducer, formReducer} from "./slices";

const rootReducer = combineReducers({
    pokemons: pokemonReducer,
    abilities: abilityReducer,
    types: typeReducer,
    forms: formReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};