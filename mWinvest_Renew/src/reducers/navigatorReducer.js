import * as types from '../actions/types';

const initialState = {
  StockList: false,
  Order: false,
  Portfolio:false,
  Modal:false
};

const navigatorReducer = (state = initialState,action) =>{
  switch (action.type) {
    case types.START_STOCK_LIST:
      return Object.assign({},state,{
        StockList: true,
        Order: false,
        Portfolio:false
      });

    case types.START_ORDER:
      return Object.assign({},state,{
        Order: true,
        StockList: false,
        Portfolio:false
      });

    case types.START_PORTFOLIO:
      return Object.assign({},state,{
        Portfolio: true,
        StockList: false,
        Order: false,
      });

    case types.START_MODAL:
      return Object.assign({},state,{
        ModalOn:true,
        ModalOff:false
      });

    case types.STOP_MODAL:
      return Object.assign({},state,{
        ModalOn:false,
        ModalOff:true
      });

    default:
        return state
  }
}

export default navigatorReducer;
