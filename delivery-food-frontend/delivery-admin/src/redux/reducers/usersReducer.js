import { typeUsers } from '../types';

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

export const usersReducer = ( state = initialState, action) => {
  switch(action.type){
    case typeUsers.login: 
      return action.payload

    case typeUsers.register: 
      return {
        userAuth: {
          uid: action.payload.userAuth,
          displayName: null,
          email: null,
          // photo: null
        },
        routeAuth: {
          isLoggedIn: false,
          checking: true
        }
      };

    default:
      return state;
  }
}