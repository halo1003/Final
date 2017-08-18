import React, { Component } from 'react';
import { View,Text,FlatList,Image} from 'react-native';
import {Content} from 'native-base';
export default class News extends Component {
  render (){
    return (
      <Content>
      <FlatList
          data=
          {
              [{Detail: 'RM GROUP Buys 70% WeChat Payment',
                Service:'Service Provider at $270M',
                symbol:'WSJ',
                time:'2 hours ago'},
              ]
        }
          renderItem={({item}) => <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'grey'}}>
                                    <View>
                                        <View>
                                        <Text>{item.Detail}</Text>
                                        <Text>{item.Service}</Text>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                          <Text>{item.symbol}</Text>
                                          <Text>{item.time}</Text>
                                        </View>
                                    </View>
                                    <Image style={{height:30,width:30}}
                                           source = {require('../images/next.png')}/>
                                  </View>

                                }

          />
      </Content>
    );
  }
}
