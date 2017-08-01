import { SET_USER_NAME, SET_PASS_WORD, USET_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST } from './types'
import firebase from '../API/api';
import UserData from '../data/userData';
export const startAuthorizing = ()=>{
  return{
    type: 'USET_START_AUTHORIZING'
  }
};

export const userAuthorized = ()=>{
  return{
    type: 'USER_AUTHORIZED'
  }
};

export const userNoExist = () =>{
  return{
    type: 'USER_NO_EXIST'
  }
};

export const login = (username,password) =>{
  return function (dispatch){
    dispatch(startAuthorizing());
    firebase.database().ref('/mUser').on('value', (snap)=>{
      snap.forEach((data)=>{
        if(data.val().Username == username && data.val().Password == password){
          UserData.setID(username);
          dispatch(userAuthorized());
        }
      });
    });
  }
}
