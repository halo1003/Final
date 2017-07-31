// const initialID = {
//   userID: '',
//   orderData:[]
// };

class Data {
  constructor(){
    userID = '';
    orderData = [];
  }
  setID(value){
    userID = value;
  }
  getID(){
    return userID;
  }
  setData(value){
    console.log(value.val());
    orderData.push({
      key: value.key,
      val: value.val()
    });
  }
  getData(){
    return orderData;
  }
}
const instance = new Data();
export default instance;
