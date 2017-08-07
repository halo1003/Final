import { SET_USER_NAME, SET_PASS_WORD, USET_START_AUTHORIZING, USER_AUTHORIZED, USER_NO_EXIST } from './types'
import firebase from '../API/api';

export const setUsername = (name) =>{
  return{
    type:'SET_USER_NAME',
    name: name
  }
};

export const setPassword = (pass) =>{
  return{
    type:'SET_PASS_WORD',
    pass: pass
  }
};

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
          if(data.val().Username == username && data.val().Password == password)
            dispatch(userAuthorized());
        })
      })
  }
}
