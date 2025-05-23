import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slice/counter/counterSlice';

const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
