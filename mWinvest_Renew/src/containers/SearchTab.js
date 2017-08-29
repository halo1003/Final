import React, { Component } from 'react';
import {View,TextInput,StyleSheet,Image,Text} from 'react-native';
import {Content} from 'native-base'

export default class SearchTab extends Component {
    constructor () {
      super();
      this.state = {
        text:'',
      }
    }

    filterSearch(text){

    }
    render (){
      return (
          <View>
              <TextInput style={styles.searchinput}
                onChangeText ={(text) => this.filterSearch(text)}
                underlineColorAndroid='transparent'
                placeholder='Search'
              />
          </View>
      );
    }
}

const styles = StyleSheet.create({
  searchinput : {
    borderWidth:1,
    marginVertical:10,
    marginHorizontal:10,
    borderRadius:5,
    backgroundColor:'white',
    padding:5,
    textAlign:'center',


  }
})
