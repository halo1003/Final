import React, { Component } from 'react';
import {View,Text,alert,TouchableHighlight,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {Content} from 'native-base';
import { onTouchChangeTab} from '../actions';
import {connect} from 'react-redux'

class OrderQueued extends Component {
  constructor (props){
    super(props);
    this.state = {
      onChangemode : 0
    }
  }
  onset(){
    this.setState({onChangemode:!this.state.onChangemode})
  }

  _renderDetailsmode() {
      return(
        <View>
          <Text style={{color:'blue',textAlign:'center'}}>Switch to details mode</Text>
        </View>
      );
  }

  _renderCompactmode (){
    return (
      <View>
      <Text style={{color:'blue',textAlign:'center'}}>Switch to compact mode</Text>
      </View>
    );

  }
  render () {
    return (
      <Content>
        <View style={{backgroundColor:'grey',height:20}}>
          <TouchableOpacity onPress ={()=>this.onset()}>
              {this.state.onChangemode == 0 ? this._renderDetailsmode():this
              ._renderCompactmode()}
          </TouchableOpacity>
        </View>
        <View>
        </View>
      </Content>
    );
  }
}
export default OrderQueued;
