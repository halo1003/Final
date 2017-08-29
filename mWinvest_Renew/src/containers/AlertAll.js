import React, { Component } from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Dimensions,FlatList} from 'react-native';
import {Content} from 'native-base';

class AlertAll extends Component {
  render () {
    return (
      <Content>
      <View>
      <FlatList
          data=
          {
              [
              {key:1,symbol: '00932.HK RM GROUP',price:'Nominal Price >= 0.398',time:'Create Time 2013-05-15 01:24:25 Alert Time -',status:'Active'},
              {key:2,symbol: '00932.HK RM GROUP',price:'Nominal Price >= 0.398',time:'Create Time 2013-05-15 01:24:25 Alert Time 2017-08-02 10:24:26',status:'Triggered'},
            ]
            }
          renderItem={({item}) =>
              <View style={{borderBottomWidth:0.5,borderBottomColor:'grey'}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                              <View>
                                  <Text>{item.symbol}</Text>
                                  <Text>{item.price}</Text>
                              </View>
                              <TouchableHighlight style={{justifyContent:'center',alignItems:'center',backgroundColor:'blue',borderRadius:10, width:Dimensions.get('window').width/4}}>
                              <Text style={{padding:5,color:'white'}}>Trade</Text>
                            </TouchableHighlight>

                    </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={{fontSize:8}}>{item.time}</Text>
                                <Text style={{fontSize:8}}>{item.status}</Text>
                            </View>
                </View>

                                }

          />
          </View>
      </Content>
    );
  }
}
export default AlertAll;
