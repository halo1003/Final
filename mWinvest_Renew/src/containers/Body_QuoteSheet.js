import React, { Component } from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import {Tabs,Tab,Content,ScrollableTab} from 'native-base';
import {onTouchChangeTab} from '../actions';
import Chart from './Chart';
import News from './News';
import {connect} from 'react-redux';

const TabIcon =({selected,title}) => {
    return (
      <Text style ={{color: selected ? 'red' : 'black'}}></Text>
    )
}

export default class Body_QuoteSheet extends Component {
  render (){
    return (
      <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
      <Image style={{height:25,width:25,marginBottom:15,paddingLeft:5}}
        source = {require('../images/settings.png')}/>
      <View>
       <Tabs
        scrollWithoutAnimation = {true}
        renderTabBar={()=> <ScrollableTab />}>


            <Tab heading="Chart"
            textStyle={{color:'black'}}
            activeTextStyle={{color:'#3d7fc5'}}
            activeTabStyle={{backgroundColor:'white'}}
            tabStyle={{backgroundColor:'white'}}
            >
              <Chart/>
            </Tab>

            <Tab heading="News"
            tabStyle={{backgroundColor:'white'}}
            activeTabStyle={{backgroundColor:'white'}}
            activeTextStyle={{color:'#3d7fc5'}}
            textStyle={{color:'black'}}
            >
              <News/>
            </Tab>

            <Tab heading="Options"
            tabStyle={{backgroundColor:'white'}}
            activeTabStyle={{backgroundColor:'white'}}
            activeTextStyle={{color:'#3d7fc5'}}
            textStyle={{color:'black'}}
            >
              <Text>Tab 3</Text>
            </Tab>


            <Tab heading="Tab4"
            tabStyle={{backgroundColor:'white'}}
            activeTabStyle={{backgroundColor:'white'}}
            activeTextStyle={{color:'#3d7fc5'}}
            textStyle={{color:'black'}}
            >
              <Text>Tab 4</Text>
            </Tab>


            <Tab heading="Tab5"
            tabStyle={{backgroundColor:'white'}}
            activeTabStyle={{backgroundColor:'white'}}
            activeTextStyle={{color:'#3d7fc5'}}
            textStyle={{color:'black'}}
            >
              <Text>Tab 5</Text>
            </Tab>
          </Tabs>
          </View>
      </View>
    );
  }
}
