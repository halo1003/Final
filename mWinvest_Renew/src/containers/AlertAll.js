import React, { Component } from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Dimensions,FlatList} from 'react-native';
import {Content} from 'native-base';

class AlertAll extends Component {
  render () {
    return (
      <Content>
      <FlatList
          data=
          {
              // [{key: '00932.HK RM GROUP',price:'Nominal Price >= 0.398',time:'Create Time 2013-05-15 01:24:25 Alert Time -',status:'Active'},
              [{key: '00932.HK RM GROUP',price:'Nominal Price >= 0.398',time:'Create Time 2013-05-15 01:24:25 Alert Time 2017-08-02 10:24:26',status:'Triggered'},]
            }
          renderItem={({item}) =>
              <View style={{borderBottomWidth:0.5,borderBottomColor:'grey',padding:5,marginTop:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                              <View>
                                  <Text>{item.key}</Text>
                                  <Text>{item.price}</Text>
                              </View>
                                  <TouchableHighlight style={{borderRadius:10,backgroundColor:'blue',height:25,width:Dimensions.get('window').width/5.5}}>
                                      <Text style={{color:'white',textAlign:'center'}}>Trade</Text>
                                  </TouchableHighlight>

                    </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>{item.time}</Text>
                                <Text>{item.status}</Text>
                            </View>
                </View>

                                }

          />
      </Content>
    );
  }
}
export default AlertAll;
