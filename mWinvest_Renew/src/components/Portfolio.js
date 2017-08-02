import React, { Component } from 'react';
import {View,StyleSheet } from 'react-native';

import style from '../styles/styles';
import { Actions } from 'react-native-router-flux';

import { Container,Button,Thumbnail,Header,Segment, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

export default class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Segment style={{backgroundColor:'red'}}>
          <Button first active>
            <Text>Positions</Text>
          </Button>
          <Button last  >
            <Text>Balance</Text>
          </Button>
        </Segment>
        <Content style= {{flex:1}}>
          <View style = {{borderTopColor:'black',borderBottomColor:'black',flex:1,flexDirection:'row',justifyContent:'space-between',borderTopWidth:1,borderBottomWidth:1}}>
            <View>
              <Text>Buying Power(HKD)</Text>
              <Text>Nav</Text>
              <Text>Margin Call</Text>
              <Text>Commodity P/L</Text>
              <Text>I.Margin</Text>
              <Text>M.Margin</Text>
              <Text>M.Level</Text>
              <Text>Cash Balance</Text>
            </View>
            <View>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
            </View>
          </View>
          <View style={{flex:1,backgroundColor:'green',flexDirection:'row',borderBottomWidth:1,justifyContent:'space-between'}}>
              <View>
                  <Icon name="apps" />
                  <Icon name="book" />
              </View>
              <View>
                  <Text>HK</Text>
              </View>
              <View>

              </View>
              <View>
                  <Text>HKD</Text>
                  <Button><Text>CLOSE</Text></Button>
              </View>
          </View>
          <View style={{flex:1,backgroundColor:'green',flexDirection:'row',borderBottomWidth:1,justifyContent:'space-between'}}>
              <View>
                  <Icon name="book" />
              </View>
              <View>
                  <Text>HSIJ3 16/03</Text>
              </View>
              <View>
                  <Text>Mkt.Orc 26547</Text>
              </View>
              <View>
                <Button><Text>CLOSE</Text></Button>
              </View>
          </View>
        </Content>
      </Container>
    );
  }
}
