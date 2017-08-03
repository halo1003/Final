import React, { Component } from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ListView,
        ScrollView
       } from 'react-native';

import styles from '../styles/styles';
import { Col, Row, Grid } from 'react-native-easy-grid';

class StockList extends Component {
  constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!=r2});
      };

    render() {
      return (
      <ScrollView>
        <View style = {styles.mainQuote}>
          <View style = {styles.ListQute}>
            <ListView dataSource = {
              this.ds.cloneWithRows([
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'},
                {key:'Toan',iso:'IT'},
                {key:'Minh',iso:'OS'},
                {key:'Ha',iso:'TMC'}
              ])
            }
          renderRow = {(rowData) => {
            return(
              <View style = {{padding:10,borderTopColor:'green'}}>
                <Text> {rowData.key}</Text>
                <Text> {rowData.iso}</Text>
              </View>
            )
          }}/>
        </View>

        <View style = {styles.grid}>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
          </Grid>
        </View>
      </View>
    </ScrollView>
      );

    }
}
export default StockList;
