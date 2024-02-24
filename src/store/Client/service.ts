import axios from "axios";
import {GET, POST} from "../../utils/axiosInterceptor.ts";
import {AddClientPayload} from "./ApiSchema";


export function addClient(payload: AddClientPayload) {
    return axios({
        url:API_ENDPOINTS.ADD_CLIENT ,
        method: POST,
        data: payload
    });
}

export function getClientList() {
    return axios({
        url:API_ENDPOINTS.GET_CLIENT_LIST ,
        method: GET,
    });
}


const API_ENDPOINTS = {
    ADD_CLIENT:'dionysus/client/add',
    GET_CLIENT_LIST:'dionysus/client/list',
}