import { type } from '../types';

const initialState = {
  userAuth: {
    uid: null,
    displayName: null,
    email: null,
    photo: null
  },
  routeAuth: {
    isLoggedIn: false,
    checking: true
  }
};

export const usersReducer = ( state= initialState, action) => {
  switch(action.type){
    case type.ejm: 
      return state;

    default:
      return state;
  }
}