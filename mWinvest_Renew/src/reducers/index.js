import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navigatorReducer from './navigatorReducer';
import reloadReducer from './reloadReducer';
import segmentReducer from './segmentReducer';

const rootReduce = combineReducers({
  userReducer,
  navigatorReducer,
  reloadReducer,
  segmentReducer
})

export default rootReduce;
