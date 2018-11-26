import * as types from '../actionTypes/LoginTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState , action) {
  switch(action.type) {
    case types.LOGIN:
    console.log(state.loginText)
     return Object.assign({}, state, {
       loginText: 'Sign Out'
     })
     
    default:
      return state;
  }
}