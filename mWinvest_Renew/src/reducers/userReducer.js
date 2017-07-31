import { ToastAndroid } from 'react-native';
import { SET_USER_NAME, SET_PASS_WORD, USET_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST, DATA_LOADED, DATA_UPDATED} from '../actions/types'
var loadFinish = 0;
const initialState = {
  authorizing:false,
  authorized:false,
  reload: false,
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
      ///Order
    case DATA_LOADED:
      console.log("loaded");
      loadFinish++;
      if(loadFinish === 2){
        return Object.assign({},state,{
          reload: true,
        });
      }
    case DATA_UPDATED:
      return Object.assign({},state,{
        reload: false,
      });

    default:
      return state;
  }
}

export default userReducer;
