import {LoginPayload, SignupPayload} from "./ApiSchema";
import {CONSTANTS} from "./Constants.ts";


export const login = (payload:LoginPayload) => {
    return {
        type: CONSTANTS.LOGIN_REQUESTED,
        payload
    }
}
export const signup = (payload:SignupPayload) => {
    return {
        type: CONSTANTS.SIGNUP_REQUESTED,
        payload
    }
}
export const profile = () => {
    return {
        type: CONSTANTS.PROFILE_REQUESTED,
    }
}