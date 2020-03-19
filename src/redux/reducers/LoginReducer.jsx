import {
    ACCESS_TOKEN
} from '../../utils/LocalStorageKeys'

import { 
    LOGOUT, 
    LOGIN_SUCCESS,
} from '../actions/Login/LoginActionTypes';

const registerJwt = (data) => {
    localStorage.setItem(ACCESS_TOKEN, data.token);           
}

const Logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);             
       
}

const initialState = {
    state: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS: {
            registerJwt(action.payload.data);
            return state;
        }

        case LOGOUT: {
            Logout();
            return state;
        }

        default:
            return state;       
    }
};