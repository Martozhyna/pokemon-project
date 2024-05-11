import axios from "axios";
import {createBrowserHistory} from "history";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});
const history = createBrowserHistory();

export {
    axiosService,
    history
};