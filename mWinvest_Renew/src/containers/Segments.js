import React, { Component } from 'react';
import {View,StyleSheet } from 'react-native';
import Positions from '../components/Positions';
import AccountBalance from '../components/AccountBalance';
import style from '../styles/styles';
import {connect} from 'react-redux';
import { onTouchChangeTab} from '../actions';
import { Container,Button,Thumbnail,Header,Segment, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

 class Segments extends Component {
  componentWillUnmount(){
    console.log('Unmount');
  }

  changeTab(value){
    this.props.dispatch(onTouchChangeTab(value));
  }
  render() {
    return (
        <Segment style={{backgroundColor:'white'}}>
          <Button onPress={()=>this.changeTab(20)}
              style={{backgroundColor:(this.props.bodyNumber == 20 ? 'blue' : 'white'),borderColor:'blue'}}
          >
            <Text style={{color : (this.props.bodyNumber == 20 ? 'white' : 'blue')}}>Positions</Text>
          </Button>

          <Button onPress={()=>this.changeTab(21)}
              style={{backgroundColor:(this.props.bodyNumber == 21? 'blue' : 'white'),borderColor:'blue'}}
           >
            <Text style={{color : (this.props.bodyNumber == 21 ? 'white' : 'blue')}}>Account Balance</Text>
          </Button>
        </Segment>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}
export default connect(mapStateToProps)(Segments);
