import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import meetingsReducer from '../features/meetings/meetingsSlice';
import {routerReducer} from 'react-router-redux'

const reducer = {
    meetings: meetingsReducer,
    routing: routerReducer
};
const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});
