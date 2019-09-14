import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        console.log(action)
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user
        }
      case LOGIN_FAIL:
      default:
        return state;
    }
  }
  