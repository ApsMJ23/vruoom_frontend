import {CONSTANTS} from "./constants.ts";
import {AddClientPayload} from "./ApiSchema";




export const addClient = (payload:AddClientPayload,handlers:unknown) => {
    return {
        type: CONSTANTS.ADD_CLIENT_REQUESTED,
        payload,
        handlers
    }
}


export const fetchClientList = () => {
    return {
        type: CONSTANTS.CLIENT_LIST_FETCH_REQUESTED,
    }
}