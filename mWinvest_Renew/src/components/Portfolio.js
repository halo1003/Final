import React, { Component } from 'react';
import PortfolioData from '../data/portfolioData'
import styles from '../styles/styles';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView
} from 'react-native';
import { LoadData,  DataUpdated} from '../actions';
const ActionButton = require('../containers/ActionButton');
class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      buying_power: '',
      ledger: '',
      total_mkt_value: '',
      withdrawable: ''
    }
    this.loadData = this.loadData.bind(this);
  }
  componentWillUpdate(){
    console.log("component Will Update");
  }
  componentDidUpdate(){
    if(this.props.reload){
      this.props.dispatch(DataUpdated());
      var e = PortfolioData.getData();
      this.setState({
        buying_power: e.bp,
        ledger: e.le,
        total_mkt_value: e.tm,
        withdrawable: e.wi
      })
    }
  }
  loadData(){
      this.props.dispatch(LoadData('portfolio'));
  }
  render() {
    return (

      <View style = {styles.containers}>
        <ActionButton onPress= {this.loadData} title="LOAD">
        </ActionButton>
        <Text>{this.state.buying_power}</Text>
        <Text>{this.state.ledger}</Text>
        <Text>{this.state.total_mkt_value}</Text>
        <Text>{this.state.withdrawable}</Text>
      </View>
    );
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    reload: state.networkingReducer.reload
  }
}

export default connect(mapStateToProps)(Portfolio);
