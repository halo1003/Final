import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput } from 'react-native';
import styles from '../styles/styles';
export default class OrderBook extends Component
{
  render(){
    return(
      <View style = {styles.container}>
        <Text>
          Account
        </Text>
      </View>
    );
  }
}
