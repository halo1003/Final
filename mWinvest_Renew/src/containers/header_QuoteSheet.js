/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {Content} from 'native-base';
import Expand from 'react-native-simple-expand';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

class header_QuoteSheet extends Component {
  constructor (props) {
    super(props);
    this.state = { animatedValue: new Animated.Value(0) }
  }

  getMaxHeight = () => {
    if (!this.refs || !this.refs.expand)
    return 9999;
    return this.refs.expand.state.maxHeight;
  };

  render() {
    const { animatedValue } = this.state;
    const maxHeight = this.getMaxHeight();

    const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 40, maxHeight*.5, maxHeight],
      outputRange: [1, 1, 0.5,  1],
    });

    const height = this.state.animatedValue.interpolate({
      inputRange: [0, maxHeight * .3, maxHeight],
      outputRange: [0, 0, 100],
    });

    return (
      const tableHead = ['Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9', 'Head10','Head11','KIKI'];
      <Content>
        {/* <View style={styles.container}>
        <Text style={styles.headText}>Quote is delayed for at least 15 mins</Text>
      </View> */}

      <View style={styles.statushead}>
        <View style={styles.bellandarrow}>
          <Image style={{height:20,width:20}}source = {require('../images/bell.png')}/>
        </View>
        <View style={{width:Dimensions.get('window').width/2.5}}>
        <View style={styles.bid}>
          <Text style={{paddingLeft:5,color:'white'}}>Bid</Text>
          <Text style={{alignSelf:'flex-end',paddingRight:2,color:'white'}}>21,519(1)</Text>
        </View>

        <View style={styles.ask}>
          <Text style={{paddingLeft:5,color:'white'}}>Ask</Text>
          <Text style={{alignSelf:'flex-end',paddingRight:2,color:'white'}}>21,520(2)</Text>
        </View>
      </View>

      <View style={styles.realInf}>
        <Image style={{height:30,width:30}}source = {require('../images/arrowDown.png')}/>
        {/* <Image style={{height:20,width:20}}
        source = {require('../images/arrowDown.png')}/> */}

        <View>
          <Text style={{fontSize:30}}>21,519</Text>
          <Text style={{alignSelf:'flex-end'}}>17 (7.89%)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bellandarrow} onPress={()=>this.setState({ open: !this.state.open })}>
        {this.state.open ? <Image style={{height:20,width:20}}source = {require('../images/arrowExpand.png')}/>
        : <Image style={{height:20,width:20}}source = {require('../images/arrowCollap.png')}/>}
      </TouchableOpacity>
    </View>

    <Expand
      minHeight={0}
      containerStyle={{ flexGrow: 1 }}
      ref="expand"
      value={this.state.open}
      animatedValue={animatedValue}>
      {/* <Animated.Text style={[styles.welcome, { opacity }]}>
      {this.state.open ? 'Tap to Close' : 'Tap to Open'}
    </Animated.Text> */}
    <View>
      <Swiper height={160}
        paginationStyle={{
          bottom: 0
        }}>
        <View style={{justifyContent: 'flex-end'}}>
          <Animated.View style={{justifyContent: 'center'}}>
            <Grid>
              <Col>
                <View style={styles.item}>
                  <Text>Open</Text>
                  <Text>21,552</Text>
                </View>

                <View style={styles.item}>
                  <Text>Pre. Close</Text>
                  <Text>21,119</Text>
                </View>

                <View style={styles.item}>
                  <Text>L/H</Text>
                  <Text>21,477 - 21,592</Text>
                </View>

                <View style={styles.item}>
                  <Text>Buy.pow.</Text>
                  <Text>378,995,124.83</Text>
                </View>

                <View style={{height:30,flexDirection:'row',justifyContent:'space-between', padding:5}}>
                  <Text>Lot Size</Text>
                  <Text>4000</Text>
                </View>
              </Col>

              <Col>
                <View style={styles.item}>
                  <Text>Net</Text>
                  <Text>30@253</Text>
                </View>

                <View style={styles.item}>
                  <Text>EPS</Text>
                  <Text>0.024</Text>
                </View>

                <View style={styles.item}>
                  <Text>P/E Ratio</Text>
                  <Text>290.00</Text>
                </View>

                <View style={styles.item}>
                  <Text>Yield</Text>
                  <Text>N/A</Text>
                </View>

                <View style={{height:30,flexDirection:'row',justifyContent:'space-between', padding:5}}>
                  <Text>52 WK</Text>
                  <Text>1.180 - 7.20</Text>
                </View>
              </Col>
            </Grid>
          </Animated.View>
        </View>

        <View style={{justifyContent: 'flex-end'}}>
          <Animated.View style={{justifyContent: 'center'}}>
            <Grid>
              <Col>
                <View style={styles.item}>
                  <Text>Open</Text>
                  <Text>21,552</Text>
                </View>

                <View style={styles.item}>
                  <Text>Pre. Close</Text>
                  <Text>21,119</Text>
                </View>

                <View style={styles.item}>
                  <Text>L/H</Text>
                  <Text>21,477 - 21,592</Text>
                </View>

                <View style={styles.item}>
                  <Text>Buy.pow.</Text>
                  <Text>378,995,124.83</Text>
                </View>

                <View style={{height:30,flexDirection:'row',justifyContent:'space-between', padding:5}}>
                  <Text>Lot Size</Text>
                  <Text>4000</Text>
                </View>
              </Col>

              <Col>
                <View style={styles.item}>
                  <Text>Net</Text>
                  <Text>30@253</Text>
                </View>

                <View style={styles.item}>
                  <Text>EPS</Text>
                  <Text>0.024</Text>
                </View>

                <View style={styles.item}>
                  <Text>P/E Ratio</Text>
                  <Text>290.00</Text>
                </View>

                <View style={styles.item}>
                  <Text>Yield</Text>
                  <Text>N/A</Text>
                </View>

                <View style={{height:30,flexDirection:'row',justifyContent:'space-between', padding:5}}>
                  <Text>52 WK</Text>
                  <Text>1.180 - 7.20</Text>
                </View>
              </Col>
            </Grid>
          </Animated.View>
        </View>
      </Swiper>
    </View>
  </Expand>

  <View style={{alignItems:'center',backgroundColor:'#f2f2f2',justifyContent:'space-between',flexDirection:'row',padding:5}}>
    <Image style={{height:20,width:20}}source = {require('../images/back.png')}/>
    <Text>HK Index Futures</Text>
    <Image style={{height:20,width:20}}source = {require('../images/next.png')}/>
    <TouchableHighlight style={{justifyContent:'center',alignItems:'center',backgroundColor:'#3d7fc5',borderRadius:10, width:Dimensions.get('window').width/3.5}}>
    <Text style={{padding:5}}>Add to WL</Text>
  </TouchableHighlight>
</View>
</Content>
);
}
}

const styles = StyleSheet.create({
  menuStyle: {
    overflow: 'scroll'
  },
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    width: Dimensions.get('window').width,
    padding:5
  },

  bellandarrow:{
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:5
  },

  headText:{
    alignSelf: 'flex-end',
    fontSize:10
  },

  statushead:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  bid:{
    backgroundColor:'red',
    margin:2,
    borderRadius:5,
  },

  ask:{
    backgroundColor:'green',
    margin:2,
    borderRadius:5,
  },

  realInf:{
    flexDirection:'row',
    width:Dimensions.get('window').width/2.5,
    borderWidth:1,
    borderColor:'#bdbdbd',
    borderRadius:5,
    justifyContent:'space-between',
    paddingHorizontal:10,
    alignItems:'center'
  },

  item:{
    height:30,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:5,
    borderBottomWidth:1,
    borderColor:'#f2f2f2',
    padding:5
  }
});

export default header_QuoteSheet
