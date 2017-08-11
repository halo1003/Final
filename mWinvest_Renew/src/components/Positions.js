import React, { Component } from 'react';
import {View,StyleSheet,Text,SectionList,Image } from 'react-native';
import {Content,Container} from 'native-base';
import Segments from '../containers/Segments';

export default class Positions extends Component{
  render() {
    var sectionData = [
          {title1:"HK",title2:"HKD",data:[{symbol:"HSBC HOLDINGS",id:"00005",qty:"1,000,000",price:"135,900,000.00"}],key:"HK",key:"HKD"},
          {title1:"HK",title2:"CNY",
              data:[{symbol:"HSBC HOLDINGS",id:"00005",qty:"986,000",price:"135,900,000.00"},
                    {symbol:"HSBC HOLDINGS",id:"00011",qty:"1,000,000",price:"108,900,000.00"},
                    {symbol:"HSBC HOLDINGS",id:"00013",qty:"1,000,000",price:"105,000,000.00"},
                    {symbol:"HSBC HOLDINGS",id:"00112",qty:"1,000,000",price:"89,800,000.00"}
          ],key:"HK",key:"CNY"},
    ];
    return (
    <Container>
        <Segments/>
      <Content>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:5,borderTopWidth:1,borderBottomWidth:1}}>
            <Text>Total Portfolio Value:</Text>
            <Text>HKD Number</Text>
          </View>
        <View>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:5}}>
              <Text>                      </Text>
              <Text>Available Qty</Text>
              <Text>Market Value</Text>
              <Image style={{height:20,width:20,}}
                     source = {require('../images/sort.png')}/>
          </View>
          <View>
          <SectionList
            sections={sectionData}
            renderItem =
            {
              ({item}) =><View style={{flexDirection:'row',alignItems:'center',borderTopWidth:0.5,borderBottomWidth:0.5,padding:3}}>
                          <View style={{flex:12}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>{item.id}</Text>
                                <Text>{item.symbol}</Text>
                                <Text>{''}</Text>
                                <Text>{''}</Text>
                             </View>
                             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                 <Text>{''}</Text>
                                 <Text>{''}</Text>
                                 <Text>{item.qty}</Text>
                                 <Text>{item.price}</Text>
                            </View>
                          </View>
                          <Image style={{height:20,width:20,flex:1,}}
                                 source = {require('../images/Arrows-Forward.png')}/>
                          </View>

            }
            renderSectionHeader = {
                ({section}) =>
                              <View style={{flex:1,flexDirection:'row',padding:5,justifyContent:'space-between',backgroundColor:'#F2F2F2'}}>
                                  <Text>{section.title1}</Text>
                                  <Text>{section.title2}</Text>
                              </View>

            }
          >
          </SectionList>
          </View>
        </View>
      </Content>
    </Container>
    );
  }
}
