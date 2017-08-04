import { START_STOCK_LIST, START_ORDER, START_PORTFOLIO, START_WATCHLISTS} from '../actions/types'

const initialState = {
  leftHeader: 'Watchlists',
  rightHeader: 'Edit',
  bodyNumber: 1,
};

const navigatorReducer = (state = initialState,action) =>{
  //console.log('called');
  switch (action.type) {
    case 1:
      return Object.assign({},state,{
        leftHeader: 'Watchlists',
        rightHeader: 'Edit',
        bodyNumber: 1,
      });

    case 2:
      return Object.assign({},state,{
        leftHeader: 'Edit Order',
        rightHeader: '',
        bodyNumber: 2,
      });
    case 3:
      return Object.assign({},state,{
        leftHeader: '',
        rightHeader: '',
        bodyNumber: 3,
      });
    case 4:
      return Object.assign({},state,{
        leftHeader: 'New',
        rightHeader: 'Close',
        bodyNumber: 4,
      });
    case 5:
      return Object.assign({},state,{
        // leftHeader: 'Watchlists',
        // rightHeader: 'Edit',
        bodyNumber: 5,
      });

    case 6:
      return Object.assign({},state,{
        // leftHeader: 'Edit Order',
        // rightHeader: '',
        bodyNumber: 6,
      });
    case 7:
      return Object.assign({},state,{
        // leftHeader: '',
        // rightHeader: '',
        bodyNumber: 7,
      });
    case 8:
      return Object.assign({},state,{
        // leftHeader: 'New',
        // rightHeader: 'Close',
        bodyNumber: 8,
      });
    case 9:
      return Object.assign({},state,{
        // leftHeader: 'Watchlists',
        // rightHeader: 'Edit',
        bodyNumber: 9,
      });

    case 10:
      return Object.assign({},state,{
        // leftHeader: 'Edit Order',
        // rightHeader: '',
        bodyNumber: 10,
      });
    case 11:
      return Object.assign({},state,{
        // leftHeader: '',
        // rightHeader: '',
        bodyNumber: 11,
      });
    case 12:
      return Object.assign({},state,{
        // leftHeader: 'New',
        // rightHeader: 'Close',
        bodyNumber: 12,
      });
    case 13:
      return Object.assign({},state,{
        // leftHeader: '',
        // rightHeader: '',
        bodyNumber: 13,
      });
    case 14:
      return Object.assign({},state,{
        // leftHeader: 'New',
        // rightHeader: 'Close',
        bodyNumber: 14,
      });

    default:
        return state
  }
}

export default navigatorReducer;
