import {axiosService} from "./axiosService";
import {urls} from "../configs";

const typeService = {
    getById: (id) => axiosService.get(`${urls.types}/${id}`),
    getAllType: (params) => axiosService.get(urls.types, {params})
};

export {
    typeService
};