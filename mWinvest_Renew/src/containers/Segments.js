import React, { Component } from 'react';
import {View,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import style from '../styles/styles';
import Theme,{ createTheme, createStyle,  createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles';
import { reload} from '../actions';
import I18n from '../styles/i18n';
import {connect} from 'react-redux';

const Button = createThemedComponent(TouchableOpacity);
 class Segments extends Component {

   changeLanguage(val){
     I18n.locale = val;
     this.props.dispatch(reload(this.props.reload));
   }
  render() {
    return (
      <Theme.View>
        <Theme.View style={{left:10}}><Theme.Text style={{color:'@textColor'}}>Language</Theme.Text></Theme.View>
        <Theme.View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',width:Dimensions.get('window').width}}>
          <Button style={[themedstyles.button, themedstyles.genericButton]} onPress= {() => this.changeLanguage('en')}>
            <Theme.Text style={[themedstyles.buttonText, { color: '@buttonText' }]}>
              English
            </Theme.Text>
          </Button>
          <Button style={[themedstyles.button, themedstyles.genericButton]} onPress= {() => this.changeLanguage('vn')}>
            <Theme.Text style={[themedstyles.buttonText, { color: '@buttonText' }]}>
              Vietnamese
            </Theme.Text>
          </Button>
        </Theme.View>
      </Theme.View>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    reload: state.reloadReducer.reload
  }
}
export default connect(mapStateToProps)(Segments);
