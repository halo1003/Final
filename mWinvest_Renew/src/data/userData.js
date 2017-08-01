class UserData {
  constructor(){
    userID = '';
  }
  setID(value){
    userID = value;
  }
  getID(){
    return userID;
  }
}
const instance = new UserData();
export default instance;
