import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView } from 'react-native';
import {Header,Left,Button,Icon,Body,Right,Title} from 'native-base';
import {onTouchChangeTab} from '../actions';
import {connect} from 'react-redux';
class AppHeader extends Component {
  constructor(props){
    super(props);
    this.onLeftHeaderTouch = this.onLeftHeaderTouch.bind(this);
    this.onRightHeaderTouch = this.onRightHeaderTouch.bind(this);
  }
  onLeftHeaderTouch(){
    switch (this.props.bodyNumber) {
      case 1:
        this.props.dispatch(onTouchChangeTab(4));
        break;
      default:

    }
  }
  onRightHeaderTouch(){

  }
  render() {
    return (
      <Header noShadow>
       <Left>
         <Button transparent
          onPress = {this.onLeftHeaderTouch}>
           <Text>
            {this.props.leftHeader}
           </Text>
         </Button>
       </Left>
       <Body>
         <Title>
           {this.props.bodyNumber == 1 ? 'Quotes'
           : this.props.bodyNumber == 2 ? 'Orders'
           : this.props.bodyNumber == 3 ?'Portfolios'
           : this.props.bodyNumber == 20 ?'Portfolios'
           : this.props.bodyNumber == 21 ?'Portfolios'
           :'Watchlists'}
         </Title>
       </Body>
       <Right>
         <Button transparent
          onPress = {this.onRightHeaderTouch}>
           <Text>
              {this.props.rightHeader}
           </Text>
         </Button>
       </Right>
     </Header>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    leftHeader: state.navigatorReducer.leftHeader,
    rightHeader: state.navigatorReducer.rightHeader,
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}

export default connect(mapStateToProps)(AppHeader);
