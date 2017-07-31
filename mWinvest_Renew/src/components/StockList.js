import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView } from 'react-native';
import {  } from '../actions';
import styles from '../styles/styles';

class StockList extends Component {

    constructor(props) {
        super(props);
        this.state= {
          mang:[]
        };
    }
    componentWillMount(){

    }
    render() {
      return (
      <ScrollView horizontal={true}>

      </ScrollView>
      );
    }
}

export default StockList;
