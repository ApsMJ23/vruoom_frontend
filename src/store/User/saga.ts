import * as Effects from 'redux-saga/effects'
import {CONSTANTS} from "./Constants.ts";
import * as ApiService from "./service.ts";
import {toast} from "react-toastify";
import {history} from "../../utils/utils.ts";


const call = Effects.call;
const put = Effects.put;
const takeLatest = Effects.takeLatest;

const handleNavigation = (isActive) => {
    if(isActive){
        history.navigate('/app/dashboard');
    }
    else{
        history.navigate('/app/activate');
    }

}


function* loginWithPassword(action){
    try{
        yield put({
            type:CONSTANTS.LOGIN_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.loginWithPassword, action.payload);
        if(Object.prototype.hasOwnProperty.call(response.data, 'token')){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isActive', JSON.stringify(response.data.isActive));
            yield put({
                type:CONSTANTS.LOGIN_SUCCESS,
                payload:response.data,
            })
            toast.success('Login Successful')
            handleNavigation(response.data.isActive)
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

function* signup(action){
    try{
        yield put({
            type:CONSTANTS.SIGNUP_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.signup, action.payload);
        if(Object.prototype.hasOwnProperty.call(response.data, 'token')){
            localStorage.setItem('token', response.data.token);
            yield put({
                type:CONSTANTS.SIGNUP_SUCCESS,
                payload:response.data,
            })
            history.navigate('/app/activate');
        }
        else{
            toast.error('Something went wrong');
            yield put({
                type:CONSTANTS.SIGNUP_FAILED,
                payload:'Something went wrong',
            })
        }
    }catch (e) {
        toast.error(e.response.data.username?.[0]??'Something went wrong');
        yield put({
            type:CONSTANTS.SIGNUP_FAILED,
            payload:e.response.data.username[0]??'Something went wrong',
        })
    }finally {
        action.payload?.onSuccess?.();
    }

}

function* profile(){
    try{
        yield put({
            type:CONSTANTS.PROFILE_PROCESSING,
            payload:true,
        })
        const response = yield call(ApiService.profile);
        yield put({
            type:CONSTANTS.PROFILE_SUCCESS,
            payload:response.data,
        })
    }catch (e) {
        toast.error(e.response.data.error??'Something went wrong');
        yield put({
            type:CONSTANTS.PROFILE_FAILED,
            payload:e.response.data.error??'Something went wrong',
        })
    }

}

export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.LOGIN_REQUESTED, loginWithPassword);
    yield takeLatest(CONSTANTS.SIGNUP_REQUESTED, signup);
    yield takeLatest(CONSTANTS.PROFILE_REQUESTED, profile);
}