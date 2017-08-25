import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import {Tabs,Tab,Content,ScrollableTab} from 'native-base';
import {onTouchChangeTab} from '../actions';
import ChartLayout from './ChartLayout';
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
      <View>
             <Tabs
              scrollWithoutAnimation = {true}
              initialPage = {0}
              renderTabBar={()=> <ScrollableTab />}>

                  <Tab heading="Chart"
                  textStyle={{color:'black'}}
                  activeTextStyle={{color:'#3d7fc5'}}
                  activeTabStyle={{backgroundColor:'white',width:150,paddingLeft:50}}
                  tabStyle={{backgroundColor:'white',width:150,paddingLeft:50}}
                  >
                    <ScrollView>
                      <ChartLayout/>
                      <View>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                        <Text>Hello</Text>
                      </View>
                    </ScrollView>
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
              <TouchableOpacity style={{paddingLeft:10,paddingRight:5,paddingTop:10,position:'absolute',backgroundColor:'white',height:45}}>
                <Image style={{height:25,width:25}}source = {require('../images/settings.png')}/>
              </TouchableOpacity>
      </View>
    );
  }
}
