import {axiosService} from "./axiosService";
import {urls} from "../configs";

const pokemonService = {
    getAll: () => axiosService.get(urls.pokemons),
    getById: (id) =>axiosService.get(`${urls.pokemons}/${id}`)

};

export {
    pokemonService
};