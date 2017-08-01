import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput } from 'react-native';
import styles from '../styles/styles';
import {Content} from 'native-base';


const ActionButton = require('../containers/ActionButton');


export default class Order extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state= {
          symbol:'',
          dataSource: ds.cloneWithRows(['row1','row2','row3','row4','row5','row6','row7','row8','row9','row10','row11','row12','row13','row10','row11','row12','row13','row10','row11','row12','row13','row10','row11']),
          // MANG DO DU LIEU TU DATABASE VE
          mang:[]
        };
      }


    render() {
      return (

    <Content style={styles.container}>
      <View style={styles.TextSymbol}>
        <TextInput
        onChangeText={(value) => this.setState({symbol: value})}
        placeholder="Symbol"
        />
      </View >
          <View style={styles.order}>
    {/**/}
            <View style={styles.order1}>
                <View style={{borderWidth:1,alignContent:'stretch'}}>
                    <Text>Open</Text>
                    <Text>Prev.Close</Text>
                    <Text>L/H</Text>
                    <Text>Buy.pow</Text>
                    <View style={styles.textprice}>
                    <TextInput
                    onChangeText={(value) => this.setState({Price: value})}
                    placeholder="Price"
                    />
                    </View>
                </View>
                <View style={{borderWidth:1}}>
                    <Text>InputText</Text>
                    <Text>%</Text>
                    <Text>  </Text>
                    <Text>Net</Text>
                </View>
            </View>
    {/**/}
            <View style={styles.order1}>
                <View style={styles.orderButton}>
                    <View style={styles.buttonSellBuy}>
                    <ActionButton onPress= {this.onBuy} title="BUY">
                    </ActionButton>
                    </View>

                    <View style={styles.buttonSellBuy}>
                    <ActionButton onPress= {this.onSell} title="SELL">
                    </ActionButton>
                    </View>
                </View>
            </View>
      {/**/}
            <View style={styles.order1}>
                <View>
                    <Text>Number1</Text>
                    <Text>Number2</Text>
                    <Text>Number3</Text>
                    <Text>Number4</Text>
                    <Text>Number5</Text>
                    <Text>Number6</Text>
                </View>
                <View>
                    <Text>Number1</Text>
                    <Text>Number2</Text>
                    <Text>Number3</Text>
                    <Text>Number4</Text>
                    <Text>Number5</Text>
                    <Text>Number6</Text>
                </View>
            </View>

          </View>

      </Content>

      );
    }

    }
