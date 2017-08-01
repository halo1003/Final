import { ToastAndroid } from 'react-native';
import { SET_USER_NAME, SET_PASS_WORD, USET_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST } from '../actions/types'

const initialState = {
  name : null,
  pass: null,
  authorizing:false,
  authorized:false
};

const userReducer = (state = initialState,action) =>{
  switch (action.type) {

    case SET_USER_NAME:
      console.log(state + action.name);
      return state;

    case SET_PASS_WORD:
      console.log(state + action.pass);
      return state;

    case USET_START_AUTHORIZING:
      ToastAndroid.show('..Authorizing',ToastAndroid.SHORT);
      return {
        ...state,
        authorizing:true
      };

    case USER_AUTHORIZED:
      ToastAndroid.show('SUCCESS',ToastAndroid.SHORT);
      return Object.assign({},state,{
        authorized: true,
        authorizing: false
      });

    case USER_NO_EXIST:
      ToastAndroid.show('Wrong Username or password',ToastAndroid.SHORT);
      return state;

    default:
      return state;
  }
}

export default userReducer;
