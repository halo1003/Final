class OrderData {
  constructor(){
    orderData = [];
  }
  setData(value){
    console.log(value.val());
    orderData.push({
      key: value.key,
      val: value.val()
    });
  }
  getData(){
    var e = orderData;
    return e;
  }
  clearData(){
    orderData.splice(0, orderData.length);
  }
}
const instance = new OrderData();
export default instance;
