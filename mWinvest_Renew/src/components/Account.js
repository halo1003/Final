import React, { Component } from 'react';
import {Content} from 'native-base';
import Data from './Data';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput ,Image} from 'react-native';


export default class OrderBook extends Component
{
  contructor() {

  }
  render(){
    return(
      <Content style={{paddingHorizontal:10}}>
        <View style={{alignItems:'center',paddingVertical:20}}>
          <Image style={{height:80,width:80}}
                source = {require('../images/user.png')}/>
          <Text>{Data.getID()}</Text>
        </View>
        <View>
          <Text style={styles.blackText}>Last Successful Logged in</Text>
          <Text>2015-07-23 10:33:55 HKT</Text>
          <Text>AAstocks Quote Services Type</Text>
          <Text style={styles.blackText}>Real-time Snapshot Quotes</Text>
        </View>

        <View style={styles.horizontal}>
          <Text>Used</Text>
          <Text>123</Text>
        </View>
        <View style={styles.horizontal}>
          <Text>Remaining</Text>
          <Text>377</Text>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  // Please add StyleSheet to the React imports
  horizontal:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  blackText:{
    color: 'black'
  }
});
