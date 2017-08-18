const initialState = {
  reload : false
};
const reloadReducer = (state = initialState,action) =>{
  //console.log('called')
  switch (action.type) {
    case true:
      return Object.assign({},state,{
        reload : false
      });
    case false:
      return Object.assign({},state,{
          reload : true
      });
    default:
        return state
    }
}
export default reloadReducer;
