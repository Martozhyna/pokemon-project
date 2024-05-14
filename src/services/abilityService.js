import {axiosService} from "./axiosService";
import {urls} from "../configs";

const abilityService = {
    getById: (id) => axiosService.get(`${urls.abilities}/${id}`)
};

export {
    abilityService
};