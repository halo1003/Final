const initialID = {
  userID: ''
};

class Data {
  setID(value){
    userID = value;
  }
  getID(){
    return userID;
  }
}
const instance = new Data();
export default instance;
