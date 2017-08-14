/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{ Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import store from './src/configStore';
import { Provider } from 'react-redux';

export default class mWinvest_Renew extends Component{
  render(){
    return (
      <Provider store = {store}>
        <App/>
      </Provider>
    );
  }
}
AppRegistry.registerComponent('mWinvest_Renew', () => mWinvest_Renew);
