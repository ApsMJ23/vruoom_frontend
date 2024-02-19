import * as Effects from 'redux-saga/effects'
import {CONSTANTS} from "./Constants.ts";
import * as ApiService from "./service.ts";
import {toast} from "react-toastify";
import {history} from "../../utils/utils.ts";


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
        if(Object.prototype.hasOwnProperty.call(response.data, 'token')){
            localStorage.setItem('token', response.data.token);
            yield put({
                type:CONSTANTS.LOGIN_SUCCESS,
                payload:response.data,
            })
            history.navigate('/app/dashboard');

        }
        else{
            toast.error('Something went wrong');
            yield put({
                type:CONSTANTS.LOGIN_FAILED,
                payload:'Something went wrong',
            })
        }
    }catch (e) {
        toast.error(e.response.data.error??'Something went wrong');
        yield put({
            type:CONSTANTS.LOGIN_FAILED,
            payload:e.response.data.error??'Something went wrong',
        })
    }finally {
        action.payload?.onSuccess?.();
    }
}

export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.LOGIN_REQUESTED, loginWithPassword);
}