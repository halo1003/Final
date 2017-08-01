import firebase from '../API/api';
import UserData from '../data/userData';
import OrderData from '../data/orderData';
import PortfolioData from '../data/portfolioData';
export const startLoading = ()=>{
  return{
    type: 'DATA_LOADING'
  }
};
export const DataLoaded = ()=>{
  return{
    type: 'DATA_LOADED',
  }
};
export const DataUpdated = ()=>{
  return{
    type: 'DATA_UPDATED',
  }
};
export const LoadData = (param) => {
  return function (dispatch){
    dispatch(startLoading());
    var userID = UserData.getID();
    if(param == 'order'){
      firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/BUY').on('value', (snap)=>{
        snap.forEach((data)=>{
          OrderData.setData(data);
        });
        dispatch(DataLoaded());
      });
      firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/SELL').on('value', (snap)=>{
        snap.forEach((data)=>{
          OrderData.setData(data);
        });
        dispatch(DataLoaded());
      });
    }
    else if (param == 'portfolio'){
      console.log("portfolio")
      firebase.database().ref('/mWinvest/Portfolio/mUser_' + userID).on('value', (snap)=>{
        var e = {
          bp: '',
          le: '',
          tm: '',
          wi: ''
        };
        console.log('Parse');
        //console.log(snap);
        snap.forEach((data)=>{
          switch (data.key) {
            case 'buying_power':
              e.bp = data.val();
              break;
            case 'ledger':
              e.le = data.val();
              break;
            case 'total_mkt_value':
              e.tm = data.val();
              break;
            case 'withdrawable':
              e.wi = data.val();
              break;
            default:
              console.log(data.val().children_);

          }
          PortfolioData.setData(e);
        });
        dispatch(DataLoaded());
        dispatch(DataLoaded());
      });
    }
  }
}
// export const orderLoadData = () =>{
//   return function (dispatch) {
//     dispatch(startLoading());
//     var userID = Data.getID();
//     firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/BUY').on('value', (snap)=>{
//       snap.forEach((data)=>{
//         Data.setData(data);
//       });
//       dispatch(DataLoaded());
//     });
//     firebase.database().ref('/mWinvest/Orders/mUser_' + userID + '/SELL').on('value', (snap)=>{
//       snap.forEach((data)=>{
//         Data.setData(data);
//       });
//       dispatch(DataLoaded());
//     });
//   }
// }
