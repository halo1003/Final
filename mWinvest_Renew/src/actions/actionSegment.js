export const startSegment = (value) =>{
  return {
    type: value
  }
};
export const onTouchChangeSegment = (value) =>{
  return function (dispatch){
    dispatch(startSegment(value));
  }
};
