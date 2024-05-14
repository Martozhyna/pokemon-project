import {axiosService} from "./axiosService";
import {urls} from "../configs";

const formService = {
    getById: (id) => axiosService.get(`${urls.forms}/${id}`)
};

export {
    formService
};