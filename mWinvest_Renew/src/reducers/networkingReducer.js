import { ToastAndroid } from 'react-native';
import {DATA_LOADING, DATA_LOADED, DATA_UPDATED} from '../actions/types'
var loadFinish = 0;
const initialState = {
  reload: false,
};

const networkingReducer = (state = initialState,action) =>{
  switch (action.type) {
    case DATA_LOADED:
      console.log("loaded");
      loadFinish++;
      if(loadFinish % 2 == 0){
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

export default networkingReducer;
