const initialState = {
  segmentName_Orderbook: 'All',
  segmentName: 'All_Alert',
};

const segmentReducer = (state = initialState,action) =>{

  switch (action.type) {

    case 'Queued':
      return Object.assign({},state,{
        segmentName: 'Queued',
      });
    case 'Fully_Filled':
      return Object.assign({},state,{
        segmentName: 'Fully_Filled',
      });
    case 'Cancelled':
      return Object.assign({},state,{
        segmentName: 'Cancelled',
      });
    case 'All':
      return Object.assign({},state,{
        segmentName_Orderbook: 'All',
      });

      case 'Active':
        return Object.assign({},state,{
          segmentName: 'Active',
        });

      case 'Triggered':
        return Object.assign({},state,{
          segmentName: 'Triggered',
          });

      case 'Cancelled_Alert':
        return Object.assign({},state,{
          segmentName: 'Cancelled_Alert',
            });

      case 'All_Alert':
        return Object.assign({},state,{
          segmentName: 'All_Alert',
          });


      default:
          return state;
}
}
export default segmentReducer;
