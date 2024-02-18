import * as Effects from 'redux-saga/effects'
import {CONSTANTS} from "./Constants.ts";
import * as ApiService from "./service.ts";
import {toast} from "react-toastify";



const call = Effects.call;
const put = Effects.put;
const takeLatest = Effects.takeLatest;


function* loginWithPassword(action){
    try{
        yield put({
            type:CONSTANTS.LOGIN_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.loginWithPassword, action.payload);
        console.log(response);
        if(Object.prototype.hasOwnProperty.call(response.data, 'token')){
            localStorage.setItem('token', response.data.token);
            yield put({
                type:CONSTANTS.LOGIN_SUCCESS,
                payload:response.data,
            })
        }else if(Object.prototype.hasOwnProperty.call(response.data, 'error')){
            toast.error(response.error);
            yield put({
                type:CONSTANTS.LOGIN_FAILED,
                payload:response.data.error,
            })
        }
        else{
            toast.error('Something went wrong');
            yield put({
                type:CONSTANTS.LOGIN_FAILED,
                payload:'Something went wrong',
            })
        }
    }catch (e) {
        toast.error('Something went wrong');
        yield put({
            type:CONSTANTS.LOGIN_FAILED,
            payload:'Something went wrong',
        })
    }
}

export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.LOGIN_REQUESTED, loginWithPassword);
}