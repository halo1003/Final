/* @flow */

import React, { Component } from 'react';
import { Animated, Text, View, Easing, Dimensions, StyleSheet } from 'react-native';
import {Content,Container} from 'native-base';
import Header_QuoteSheet from '../containers/header_QuoteSheet';
import Body_QuoteSheet from '../containers/Body_QuoteSheet';


class QuoteSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY:new Animated.Value(0)
    };
  }
  render() {
    return(
      <Content>
        <Header_QuoteSheet/>
        <Body_QuoteSheet/>
      </Content>
    );
  }
}
//<Header_QuoteSheet/><Body_QuoteSheet/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    width: Dimensions.get('window').width,
    padding:5
  },
})

export default QuoteSheet;
