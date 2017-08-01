import { ToastAndroid } from 'react-native';
import {USET_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST} from '../actions/types'
var loadFinish = 0;
const initialState = {
  authorizing:false,
  authorized:false
};

const userReducer = (state = initialState,action) =>{
  switch (action.type) {

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
