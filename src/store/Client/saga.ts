import * as Effects from "redux-saga/effects";
import {CONSTANTS} from "./constants.ts";
import * as ApiService from "./service.ts";
import {toast} from "react-toastify";

const call = Effects.call;
const put = Effects.put;
const takeLatest = Effects.takeLatest;


function* addClients(action){
    try{
        yield put({
            type:CONSTANTS.ADD_CLIENTS_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.addClient, action.payload);
        if(response.status >= 200 && response.status < 300){
            yield put({
                type:CONSTANTS.ADD_CLIENTS_SUCCESS,
                payload:false,
            })
            toast.success('Client Added Successfully')
        }
        else{
            yield put({
                type:CONSTANTS.ADD_CLIENTS_FAILED,
                payload:'Something went wrong',
            })
            toast.error('Something went wrong');
        }
    }catch (e) {
        yield put({
            type:CONSTANTS.ADD_CLIENTS_FAILED,
            payload:e.response.data.error??'Something went wrong',
        })
        toast.error(e.response.data.error??'Something went wrong');
    }finally {
        action.handlers();
    }
}

function* getClientList(){
    try{
        yield put({
            type:CONSTANTS.CLIENT_LIST_FETCH_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.getClientList);
        console.log(response.data);
        if(response.status === 200){
            yield put({
                type:CONSTANTS.CLIENT_LIST_FETCH_SUCCESS,
                payload:response.data.data,
            })
        }
        else{
            yield put({
                type:CONSTANTS.CLIENT_LIST_FETCH_FAILED,
                payload:'Something went wrong',
            })
            toast.error('Something went wrong');
        }
    }catch (e) {
        yield put({
            type:CONSTANTS.CLIENT_LIST_FETCH_FAILED,
            payload:e.response.data.message??'Something went wrong',
        })
        toast.error(e.response.data.message??'Something went wrong');
    }

}



export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.ADD_CLIENT_REQUESTED, addClients);
    yield takeLatest(CONSTANTS.CLIENT_LIST_FETCH_REQUESTED, getClientList);
}