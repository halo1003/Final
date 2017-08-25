import React, { Component } from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
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
          <Content>
              <TextInput style={styles.searchinput}
                onChangeText ={(text) => this.filterSearch(text)}
              >
              

              </TextInput>
          </Content>
      );
    }
}

const styles = StyleSheet.create({
  searchinput : {
    height: 30,
    borderWidth:1,
    borderColor:'red',
    marginVertical:10,
    marginHorizontal:10

  }
})
