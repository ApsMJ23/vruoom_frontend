import axios from "axios";
import {LoginPayload} from "./ApiSchema";
import {POST} from "../../utils/axiosInterceptor.ts";


export function loginWithPassword(payload: LoginPayload) {
    return axios({
        url:API_ENDPOINTS.LOGIN ,
        method: POST,
        data: payload,
    });
}


const API_ENDPOINTS = {
    LOGIN: '/auth/login/'
}
