import { START_STOCK_LIST, START_ORDER, START_PORTFOLIO} from '../actions/types'

const initialState = {
  StockList: false,
  Order: false,
  Portfolio:false
};

const navigatorReducer = (state = initialState,action) =>{
  switch (action.type) {
    case START_STOCK_LIST:
      return Object.assign({},state,{
        StockList: true,
        Order: false,
        Portfolio:false
      });

    case START_ORDER:
    return Object.assign({},state,{
      Order: true,
      StockList: false,
      Portfolio:false
    });

    case START_PORTFOLIO:
    return Object.assign({},state,{
      Portfolio: true,
      StockList: false,
      Order: false,
    });

    default:
        return state
  }
}

export default navigatorReducer;
