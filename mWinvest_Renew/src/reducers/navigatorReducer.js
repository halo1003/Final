const initialState = {
  leftHeader: 'Watchlists',
  rightHeader: 'Edit',
  bodyNumber: 1,
};

const navigatorReducer = (state = initialState,action) =>{
  //console.log('called');
  switch (action.type) {
    // QUOTES
    case 1:
      return Object.assign({},state,{
        leftHeader: 'Watchlists',
        rightHeader: 'Edit',
        bodyNumber: 1,
      });
    //NEW ORDER
    case 2:
      return Object.assign({},state,{
        leftHeader: 'Edit Order',
        rightHeader: '',
        bodyNumber: 2,
      });
    //Portfolios
    case 3:
      return Object.assign({},state,{
        leftHeader: '',
        rightHeader: '',
        bodyNumber: 3,
      });

    // OderBook
    case 4:
      return Object.assign({},state,{
        leftHeader: '',
        rightHeader: '',
        bodyNumber: 4,
      });
       case 5:
        return Object.assign({},state,{
          leftHeader: '',
          rightHeader: 'Settings',
          bodyNumber: 5,
        });

    case 6:
      return Object.assign({},state,{
        leftHeader:'',
        rightHeader:'New',
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
      case 15:
        return Object.assign({},state,{
          leftHeader: 'Watchlists',
          // rightHeader: 'Close',
          bodyNumber: 14,
        });

      case 16:
      return Object.assign({},state,{
        leftHeader: 'Account',
        rightHeader: '',
        bodyNumber: 16,
      });

      case 17:
      return Object.assign({},state,{
        leftHeader: '',
        rightHeader: '',
        bodyNumber: 17,
      });

      /*   Segment OrderBook Queued   */
      case 20:
        return Object.assign({},state,{
          leftHeader: '',
          rightHeader: '',
          bodyNumber: 20
        });
        /*   Segment ACCOUNTBALANCE   */
      case 21:
        return Object.assign({},state,{
          leftHeader: '',
          rightHeader: '',
          bodyNumber: 21,
        });
        case 22:
          return Object.assign({},state,{
            leftHeader: '',
            rightHeader: '',
            bodyNumber: 22,
          });
        case 23:
          return Object.assign({},state,{
            leftHeader: '',
            rightHeader: '',
            bodyNumber: 23,
          });


    default:
        return state
  }
}

export default navigatorReducer;
