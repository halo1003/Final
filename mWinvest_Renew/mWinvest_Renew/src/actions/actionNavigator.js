export const startStockList = () =>{
  return {
    type: 'START_STOCK_LIST'
  }
};

export const startOrder = () =>{
  return {
    type: 'START_ORDER'
  }
};

export const startPortfolio = () =>{
  return {
    type: 'START_PORTFOLIO'
  }
};

export const onTouchStockList = () =>{
  return function (dispatch){
    dispatch(startStockList());
  }
};

export const onTouchOrder = () =>{
  return function (dispatch){
    dispatch(startOrder());
  }
};

export const onTouchPortfolio = () =>{
  return function (dispatch){
    dispatch(startPortfolio());
  }
};
