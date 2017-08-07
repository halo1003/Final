import * as types from './types';
import firebase from '../API/api';

export const setUsername = (name) =>{
  return{
    type: types.SET_USER_NAME,
    name: name
  }
};

export const setPassword = (pass) =>{
  return{
    type: types.SET_PASS_WORD,
    pass: pass
  }
};

export const startAuthorizing = ()=>{
  return{
    type: types.USET_START_AUTHORIZING
  }
};

export const userAuthorized = ()=>{
  return{
    type: types.USER_AUTHORIZED
  }
};

export const userNotExitst = ()=>{
  return{
    type: types.USER_NO_EXIST
  }
};

export const login = (username,password) =>{
  return function (dispatch){
    dispatch(startAuthorizing());
    count = 0;
      firebase.database().ref('/mUser').on('value', (snap)=>{
        countChild = snap.numChildren();
        snap.forEach((data)=>{
          if(data.val().Username == username && data.val().Password == password)
            dispatch(userAuthorized());
          else{
            count= count + 1;
            if (countChild == count)
              dispatch(userNotExitst());
          }
        })
      })
  }
}
