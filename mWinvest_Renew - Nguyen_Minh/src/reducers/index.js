import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navigatorReducer from './navigatorReducer';

const rootReduce = combineReducers({
  userReducer,
  navigatorReducer
})

export default rootReduce;
