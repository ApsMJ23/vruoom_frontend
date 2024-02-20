import axios from "axios";
import {LoginPayload, SignupPayload} from "./ApiSchema";
import {GET, POST} from "../../utils/axiosInterceptor.ts";


export function loginWithPassword(payload: LoginPayload) {
    return axios({
        url:API_ENDPOINTS.LOGIN ,
        method: POST,
        data: payload,
    });
}

export function signup(payload: SignupPayload) {
    return axios({
        url:API_ENDPOINTS.SIGNUP ,
        method: POST,
        data: payload,
    });
}

export function profile() {
    return axios({
        url:API_ENDPOINTS.PROFILE ,
        method: GET,
    });
}



const API_ENDPOINTS = {
    LOGIN: '/auth/login/',
    SIGNUP:'/auth/signup/',
    PROFILE:'/auth/profile/',
}
