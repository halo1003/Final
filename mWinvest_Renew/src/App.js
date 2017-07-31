/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import Login from './components/Login';
import StockList from './components/StockList';
import styles from './styles/styles';

import AppRouter from './components/AppRouter';
import { connect } from 'react-redux';

class App extends Component{
  render() {
    return(
      <View style = {styles.container}>
        {this.props.authorized ? <AppRouter/> : <Login/>}
      </View>
    );
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    authorized:state.userReducer.authorized
  };
}

export default connect(mapStateToProps)(App);
