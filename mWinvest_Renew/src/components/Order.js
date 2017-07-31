import React, { Component } from 'react';
import Data from './Data';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput, ToastAndroid } from 'react-native';
import styles from '../styles/styles';
import {orderLoadData, DataUpdated} from '../actions'
import { connect } from 'react-redux';

const ActionButton = require('../containers/ActionButton');


class Order extends Component {

    constructor(props) {
        super(props);
        //Data.setID('238999');
        data=[];
        this.state= {
          symbol:'',
          dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1!=r2}),
        };
        this.onBuy = this.onBuy.bind(this);
        this.onSell = this.onSell.bind(this);
        this.loadData = this.loadData.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }
    renderRow(data){
      return (
        <View>
          <Text>{data.key}</Text>
          <Text>{data.val.Market}</Text>
          <Text>{data.val.good_till_date}</Text>
          <Text>{data.val.gross_amount}</Text>
          <Text>{data.val.name}</Text>
          <Text>{data.val.order_type}</Text>
          <Text>{data.val.qty}</Text>
          <Text>{data.val.symbol}</Text>
        </View>
      );
    }
    loadData()
    {
      this.props.dispatch(orderLoadData());
      ///this.setState({symbol: value})
    }
    onBuy(){
    }
    onSell(){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(Data.getData())
      })
    }
    componentWillMount(){
      console.log("Will Mount");
    }
    render() {
      console.log("render");
      if(this.props.reload){
        console.log("reload true");
        this.props.dispatch(DataUpdated());
        e = Data.getData();
        console.log("log");
        e.forEach((line) => {
          console.log(line.val)
        });
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(Data.getData())
        })
      }
      return (
      <ScrollView>
          <View style={styles.TextSymbol}>
            <TextInput
              //onChangeText={(value) => this.loadData(value)}
              placeholder="Symbol"
            />
          </View>

          <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow = {this.renderRow}
            />
          </View>
          <View style={styles.orderButton}>
            <View style={styles.buttonSellBuy}>
              <ActionButton onPress= {this.loadData} title="LOAD">
              </ActionButton>
            </View>

            <View style={styles.buttonSellBuy}>
              <ActionButton onPress= {this.onBuy} title="BUY">
              </ActionButton>
            </View>

            <View style={styles.buttonSellBuy}>
              <ActionButton onPress= {this.onSell} title="SELL">
              </ActionButton>
            </View>

          </View>

        </ScrollView>
      );
  }
}
const mapStateToProps = (state,ownProps)=>{
  return {
    reload: state.userReducer.reload
  };
}

export default connect(mapStateToProps)(Order);
