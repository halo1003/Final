import React, { Component } from 'react';
import {View,StyleSheet,Text,SectionList } from 'react-native';
import {Content,Container} from 'native-base';
import Segments from '../containers/Segments';

export default class AccountBalance extends Component {
  constructor (props){
    super(props);
  }
  render () {
    var sectionData = [
      {title:"HKD",data:[{text: "Cash Balance", num : 123},{text: "Buying Power (All Shares)", num:342},{text: "Buying Power (GEM/Warrants/Rights)",num:4324}],key:"HKD"},
      {title:"US",data:[{text: "Cash Balance", num : 123},{text: "Buying Power (All Shares)", num:36346},{text: "Buying Power (GEM/Warrants/Rights)",num:4324}],key:"US"},
      {title:"CNY",data:[{text: "Cash Balance", num : 123},{text: "Buying Power (All Shares)", num:342},{text: "Buying Power (GEM/Warrants/Rights)",num:4324}],key:"CNY"}
    ];
    return (
      <Container>
          <Segments/>
      <Content>
        <View >
          <SectionList
            sections={sectionData}
            renderItem =
            {
              ({item}) =><View style={{flexDirection:'row',justifyContent:'space-between',padding:3}}>
                              <View><Text>{item.text}</Text></View>
                              <View><Text>{item.num}</Text></View>
                           </View>

            }
            renderSectionHeader = {
                ({section}) => <Text style={{textAlign:'right',backgroundColor:'#F2F2F2',padding:5}}>{section.title}</Text>
            }
          >
          </SectionList>
        </View>
          </Content>
      </Container>
    );
  }

}
