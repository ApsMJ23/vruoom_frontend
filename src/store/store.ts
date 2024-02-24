import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootsaga.ts";
import userReducer from './User/reducer.ts'
import clientReducer from './Client/reducer.ts'


const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
    user: userReducer,
    client: clientReducer
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
