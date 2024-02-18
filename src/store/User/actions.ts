import {LoginPayload} from "./ApiSchema";
import {CONSTANTS} from "./Constants.ts";


export const login = (payload:LoginPayload) => {
    return {
        type: CONSTANTS.LOGIN_REQUESTED,
        payload
    }
}