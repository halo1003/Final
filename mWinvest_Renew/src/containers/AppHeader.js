import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView,StyleSheet,Dimensions } from 'react-native';
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
        this.props.dispatch(onTouchChangeTab(15));
        break;
      case 16:
        this.props.dispatch(onTouchChangeTab(5));
        break;
      default:

    }

    }
  onRightHeaderTouch(){
    switch (this.props.bodyNumber) {
    case 5:
      this.props.dispatch(onTouchChangeTab(16));
      break;
    default:
  }
  }
  render() {
    return (
      <Header noShadow style={{borderBottomColor:'#87cefa',borderBottomWidth:2,backgroundColor:'white'}}>
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:Dimensions.get('window').width}}>
       <View>
         <Button transparent
          onPress = {this.onLeftHeaderTouch}>
           <Text style={{color:'#3d7fc5'}}>
            {this.props.leftHeader}
           </Text>
         </Button>
       </View>
       <View>
         <Title style={{color:'black'}}>
           { this.props.bodyNumber == 1 ? 'Quotes'
           : this.props.bodyNumber == 2 ? 'Orders'
           : this.props.bodyNumber == 3 ? 'OderBook'
           : this.props.bodyNumber == 4 ? 'Portfolios'
           : this.props.bodyNumber == 5 ? 'Watchlists'
           :'Watchlists'
         }
         </Title>
       </View>
       <View>
         <Button transparent
          onPress = {this.onRightHeaderTouch}>
           <Text style={{color:'#3d7fc5'}}>
              {this.props.rightHeader}
           </Text>
         </Button>
       </View>
       </View>
     </Header>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    leftHeader: state.navigatorReducer.leftHeader,
    rightHeader: state.navigatorReducer.rightHeader,
    bodyNumber: state.navigatorReducer.bodyNumber,
    reload : state.reloadReducer.reload
  }
}

export default connect(mapStateToProps)(AppHeader);
