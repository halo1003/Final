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
// export const onTouchStockList = () =>{
//   return function (dispatch){
//     dispatch(startStockList());
//   }
// };
// export const onTouchOrder = () =>{
//   return function (dispatch){
//     dispatch(startOrder());
//   }
// };
// export const onTouchPortfolio = () =>{
//   return function (dispatch){
//     dispatch(startPortfolio());
//   }
// };
// export const onTouchWatchlists = () =>{
//   return function (dispatch){
//     dispatch(startWatchlists());
//   }
// };
