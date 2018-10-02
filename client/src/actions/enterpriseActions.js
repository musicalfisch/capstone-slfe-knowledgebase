import axios from 'axios';
import { GET_ENTERPRISES, ENTERPRISES_LOADING} from './types';

export const getEnterprises = () => dispatch => {  //add integration for query here
  dispatch(setEnterprisesLoading());
  axios
  .get('/api/enterprises/')
  .then(res =>
    dispatch({
      type: GET_ENTERPRISES,
      payload: res.data
    })
  )
};

export const setEnterprisesLoading = () => {
  return{
    type: ENTERPRISES_LOADING
  }
}