class PortfolioData {
  constructor(){
    info = null;
  }
  setData(value){
    info = value;
  }
  getData(){
    return info;
  }
  // clearData(){
  //   orderData.splice(0, orderData.length);
  // }
}
const instance = new PortfolioData();
export default instance;
