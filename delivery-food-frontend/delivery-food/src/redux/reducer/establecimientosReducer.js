import { typeEstablecimientos } from '../types';

const initialState = null;

export const productsReducer = ( state= initialState, action) => {
  switch(action.type){
    case typeEstablecimientos.get: 
      return action.payload 

    default:
      return state;
  }
}