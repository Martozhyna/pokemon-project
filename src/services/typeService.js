import {axiosService} from "./axiosService";
import {urls} from "../configs";

const typeService = {
    getById: (id) => axiosService.get(`${urls.types}/${id}`)
};

export {
    typeService
};