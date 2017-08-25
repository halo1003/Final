import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView,StyleSheet,Dimensions } from 'react-native';
import {Header,Left,Button,Icon,Body,Right,Title} from 'native-base';
import {onTouchChangeTab} from '../actions';
import {connect} from 'react-redux';
import I18n from '../styles/i18n';
import Theme,{createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles';

const ThemedHeader = createThemedComponent(Header);
const ThemedTitle = createThemedComponent(Title);

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
      <ThemedHeader noShadow style={{borderBottomColor:'#87cefa',borderBottomWidth:2,backgroundColor:'@backgroundColor'}}>
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',width:Dimensions.get('window').width}}>
       <View>
         <Button transparent
          onPress = {this.onLeftHeaderTouch}>
           <Theme.Text style={{color:'#3d7fc5'}}>
            {I18n.t(this.props.leftHeader)}
           </Theme.Text>
         </Button>
       </View>
       <View>
         <ThemedTitle style={{color:'@textColor'}}>
           { this.props.bodyNumber == 1 ? I18n.t('Quote')
           : this.props.bodyNumber == 2 ? I18n.t('NewOrder')
           : this.props.bodyNumber == 3 ? I18n.t('OrderBook')
           : this.props.bodyNumber == 4 ? I18n.t('Portfolio')
           : this.props.bodyNumber == 5 ? I18n.t('Account')
           : this.props.bodyNumber == 6 ? I18n.t('PriceAlert')
           : this.props.bodyNumber == 16 ? I18n.t('Settings')
           :'Watchlists'
         }
         </ThemedTitle>
       </View>
       <View>
         <Button transparent
          onPress = {this.onRightHeaderTouch}>
           <Text style={{color:'#3d7fc5'}}>
              {I18n.t(this.props.rightHeader)}
           </Text>
         </Button>
       </View>
       </View>
     </ThemedHeader>
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
