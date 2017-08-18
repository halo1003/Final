export const reloadTab = (value) =>{
  return {
    type: value
  }
};
export const reload = (value) =>{
  return function (dispatch){
    dispatch(reloadTab(value));
  }
};
