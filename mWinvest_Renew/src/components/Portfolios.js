import React, { Component } from 'react';
import {View,StyleSheet,Text,SectionList,FlatList,Image } from 'react-native';
import {Content,Container} from 'native-base';

export default class Portfolios extends Component {
  constructor (props){
    super(props);
  }
  render () {
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
      <Content>

        {/*--------------------ACOUNT BALANCE TASK--------------------------*/}

        <View>
          <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,borderBottomColor:'grey',padding:5}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:20,width:20}}
                  source = {require('../images/settings.png')}/>
                  <Text style={{fontSize:16}}> Account Balance</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image style={{height:30,width:30,margin:5}}
                         source = {require('../images/back.png')}/>
                      <Text style={{fontSize:24}}> HKD </Text>
                  <Image style={{height:30,width:30,margin:5}}
                         source = {require('../images/next.png')}/>
            </View>
          </View>
        <FlatList
            data=
            {
                [{key: 'Cash Balance',number:'60,504.24'},
                {key: 'Initial Margin',number:'29,658.29'},
                {key: 'Maintenance Margin',number:'58,748.86'},
                {key: 'Floating P/L',number:'29,658.29'},
                {key: 'Trading P/L',number:'34,788.11'}]
          }
            renderItem={({item}) => <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,borderBottomColor:'grey',padding:5}}>
                                    <Text>{item.key}</Text>
                                    <Text>{item.number}</Text>
                                    </View>

                                  }

            />
        </View>

        {/*--------------------POSITONS TASK--------------------------*/}

        <View style={{paddingTop:10}}>
            <Text style={{fontSize:20,borderBottomWidth:0.5,borderBottomColor:'grey'}}> Positions </Text>
            <FlatList
                data=
                {
                  [ {key1: 'Market Value:',value:'50,547,113.00'},
                    {key1: 'Portfolio Value:',value:'50,547,113.00'}
                  ]
                }
              renderItem = {({item}) =><View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,borderBottomColor:'grey',padding:5}}>
                                            <Text>{item.key1}</Text>
                                            <Text>{item.value}</Text>
                                          </View>
                                        }
            />
            <View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',padding:5}}>
                      <Image style={{height:20,width:20}}
                      source = {require('../images/settings.png')}/>
                      <Text>Available Qty</Text>
                      <Text>Market Value</Text>
              </View>
              <View>
              <SectionList
                sections={sectionData}
                renderItem =
                {
                  ({item}) =><View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'grey',padding:3}}>
                              <View style={{flex:1}}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text>{item.id}</Text>
                                    <Text>{''}</Text>
                                    <Text>{''}</Text>
                                    <Text>{''}</Text>
                                 </View>
                                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                     <Text>{item.symbol}</Text>
                                     <Text>{''}</Text>
                                     <Text>{item.qty}</Text>
                                     <Text>{item.price}</Text>
                                </View>
                              </View>
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
        </View>
          </Content>
    );
  }

}
