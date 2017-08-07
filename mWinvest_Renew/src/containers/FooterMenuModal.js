/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Dimensions
} from 'react-native';
import {FooterTab,Button,Icon,Footer} from 'native-base';
import { onTouchStockList, onTouchOrder, onTouchPortfolio, onStartModal, onStopModal } from '../actions';
import {connect} from 'react-redux';

class FooterMenuModal extends Component {


  Renderfoot(){
    return (
      <View style={{width: Dimensions.get('window').width}}>
        <FooterTab noShadow style={{backgroundColor:'white'}}>
          <Button  onPress= {this._onTouchStockList}>
            <Icon name="apps" />
            <Text style={{fontSize:9}}>Quotes</Text>
          </Button>

          <Button onPress= {this._onTouchOrder}>
            <Icon name="camera" />
            <Text style={{fontSize:9}}>New Order</Text>
          </Button>

          <Button onPress= {this._onTouchPortfolio}>
            <Icon active name="navigate" />
            <Text style={{fontSize:9}}>Order Book</Text>
          </Button>

          <Button>
            <Icon name="camera" />
            <Text style={{fontSize:9}}>Portfolios</Text>
          </Button>

          <Button onPress= {this._onModal}>
            <Icon active name="more" />
            <Text style={{fontSize:9}}>More</Text>
          </Button>
        </FooterTab>
    </View>
    );
  }
  render() {
    this.Renderfoot
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    Modal: state.navigatorReducer.Modal,
  }
}
export default connect(mapStateToProps)(FooterMenuModal)
