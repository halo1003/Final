/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Content} from 'native-base';
import Header_QuoteSheet from '../containers/header_QuoteSheet';
import Body_QuoteSheet from '../containers/Body_QuoteSheet';

class QuoteSheet extends Component {
  render() {
    return (
      <Content>
        <Header_QuoteSheet/>
        <Body_QuoteSheet/>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default QuoteSheet
