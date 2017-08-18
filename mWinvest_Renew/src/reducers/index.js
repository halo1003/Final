import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navigatorReducer from './navigatorReducer';
import reloadReducer from './reloadReducer'

const rootReduce = combineReducers({
  userReducer,
  navigatorReducer,
  reloadReducer
})

export default rootReduce;
