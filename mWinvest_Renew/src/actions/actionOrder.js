import { DATA_LOADING, DATA_LOADED } from './types'
import firebase from '../API/api';
import Data from '../components/Data';
export const startLoading = ()=>{
  return{
    type: 'DATA_LOADING'
  }
};
export const DataLoaded = ()=>{
  return{
    type: 'DATA_LOADED',
  }
};
export const DataUpdated = ()=>{
  return{
    type: 'DATA_UPDATED',
  }
};
export const orderLoadData = () =>{
  return function (dispatch) {
    dispatch(startLoading());
    var userID = Data.getID();
    firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/BUY').on('value', (snap)=>{
      snap.forEach((data)=>{
        Data.setData(data);
      });
      dispatch(DataLoaded());
    });
    firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/SELL').on('value', (snap)=>{
      snap.forEach((data)=>{
        Data.setData(data);
      });
      dispatch(DataLoaded());
    });
  }
}
