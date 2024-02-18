import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootsaga.ts";
import userReducer from './User/reducer.ts'


const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    user: userReducer
    // Add reducers here

});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);