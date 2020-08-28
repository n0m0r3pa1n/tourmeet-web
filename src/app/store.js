import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import meetingsReducer from '../features/meetings/meetingsSlice';
import detailsReducer from '../features/details/detailsSlice';
import {routerReducer} from 'react-router-redux'

const reducer = {
    meetings: meetingsReducer,
    details: detailsReducer,
    routing: routerReducer
};
const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production'
});
