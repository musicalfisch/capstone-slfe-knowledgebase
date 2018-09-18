import {GET_ENTERPRISES, ENTERPRISES_LOADING} from '../actions/types';

const initialState = {
  enterprises: [],
  loading: false
};

export default function( state = initialState, action){
  switch(action.type){
    case GET_ENTERPRISES:
      return{
        ...state,
        enterprises: action.payload,
        loading: false
      };
    case ENTERPRISES_LOADING:
      return{
        ...state,
        loading: true
      };
    default:
      return state;
  }
}