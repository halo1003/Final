export const startTab = (value) =>{
  return {
    type: value
  }
};
export const onTouchChangeTab = (value) =>{
  return function (dispatch){
    dispatch(startTab(value));
  }
};
