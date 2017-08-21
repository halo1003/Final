/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Content,Container} from 'native-base';
import Header_QuoteSheet from '../containers/header_QuoteSheet';
import Body_QuoteSheet from '../containers/Body_QuoteSheet';

class QuoteSheet extends Component {
  render() {
    return (
      <ScrollView>
        <Header_QuoteSheet/>
        <Body_QuoteSheet/>
      </ScrollView>
    );
  }
}

export default QuoteSheet
