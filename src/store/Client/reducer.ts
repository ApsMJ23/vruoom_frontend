import {CONSTANTS} from "./constants.ts";


const initialState = {
    clientData:[{
        businessName:'',
        GSTIN:'',
        SAPCode:'',
        PAN:'',
        Address:'',
        YearOfEstablishment:'',
        TypeOfFirm:'',
        TypeOfSite:'',
    }],
    isFetching: false,
    error: '',
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_CLIENT_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case CONSTANTS.ADD_CLIENTS_PROCESSING:
            return {
                ...state,
                isFetching: true,
            }
        case CONSTANTS.ADD_CLIENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case CONSTANTS.ADD_CLIENTS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case CONSTANTS.CLIENT_LIST_FETCH_REQUESTED:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case CONSTANTS.CLIENT_LIST_FETCH_PROCESSING:
            return {
                ...state,
                isFetching: true,
            }
        case CONSTANTS.CLIENT_LIST_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                clientData: action.payload,
            }
        case CONSTANTS.CLIENT_LIST_FETCH_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default reducer;