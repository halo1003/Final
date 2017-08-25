import React, { Component } from 'react';
import {View,StyleSheet,Text,SectionList } from 'react-native';
import {Content,Container} from 'native-base';
import SearchTab from '../containers/SearchTab';
import OrderSegments from '../containers/OrderSegments';
import OrderQueued from '../containers/OrderQueued';
import OrderAll from '../containers/OrderAll';
import Order from './Order';
import {connect} from 'react-redux';

 class OrderBook extends Component {
  constructor (props){
    super(props);
  }

  render () {
    return(
    <Content>
      <SearchTab/>
      <OrderSegments/>
    <View>
        {
          this.props.segmentName_Orderbook == 'Queued' ? <OrderQueued/>
          :this.props.segmentName_Orderbook == 'All' ? <OrderAll/>
          :<Order/>
        }
      </View>
    </Content>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{

    segmentName_Orderbook: state.segmentReducer.segmentName_Orderbook,
  }
}

export default connect(mapStateToProps)(OrderBook);
