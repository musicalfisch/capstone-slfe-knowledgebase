import axios from 'axios';
import {ADD_USER, LOGIN_SUCCESS, LOGIN_FAIL,RESPONSE_LOADING} from './types';


export const loginFunc = (user) => dispatch => {
  dispatch(setResponseLoading());
  return axios.post('api/users/login', { username: user.username, password: user.password })
    .then(res => 
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      })
    })
}

export const addUserFunc = (user) => dispatch => {
  dispatch(setResponseLoading());
  return axios.post('/api/users/register', user).then(res => dispatch({
    type: ADD_USER,
    payload: res.data
  }))
};

export const setResponseLoading = () => {
  return{
    type: RESPONSE_LOADING
  }
}
