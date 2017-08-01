import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReduces from './reducers';

// Store
const store = createStore(
    rootReduces,
    applyMiddleware(thunkMiddleware)
);

export default store;
