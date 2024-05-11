import {axiosService} from "./axiosService";
import {urls} from "../configs";

const pokemonService = {
    getAll: (params) => axiosService.get(urls.pokemons, {params}),
    getById: (id) =>axiosService.get(`${urls.pokemons}/${id}`)

};

export {
    pokemonService
};