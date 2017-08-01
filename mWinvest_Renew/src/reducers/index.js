import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navigatorReducer from './navigatorReducer';
import networkingReducer from './networkingReducer';
const rootReduce = combineReducers({
  userReducer,
  navigatorReducer,
  networkingReducer
})

export default rootReduce;
