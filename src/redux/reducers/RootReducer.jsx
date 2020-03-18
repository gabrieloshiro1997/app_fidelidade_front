import { combineReducers } from "redux";

import GlobalReducer from './GlobalReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({ 
    GlobalReducer,
    LoginReducer
});