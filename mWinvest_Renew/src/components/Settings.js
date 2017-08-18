
// import Theme from 'react-native-theming';
// import { createTheme ,createThemedComponent } from 'react-native-theming';
// //import themes from '../styles/themedStyles';
// import styles from '../styles/themedStyles';
// const Button = createThemedComponent(TouchableOpacity);
// export const themes = [
//   createTheme({
//     backgroundColor: 'white',
//     textColor: 'black',
//     componentColor: 'blue',
//     buttonText: 'white',
//     statusBar: 'dark-content',
//   }, 'Light'),
//   createTheme({
//     backgroundColor: 'black',
//     textColor: 'white',
//     componentColor: 'yellow',
//     buttonText: 'black',
//     statusBar: 'light-content',
//   }, 'Dark'),
// ];
// class Settings extends Component
// {

//   render(){
//     return(
//       <View>
        // <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        //   <TouchableOpacity onPress= {() => this.changeLanguage('en')}>
        //     <Text>
        //       English
        //     </Text>
        //   </TouchableOpacity>
        //   <TouchableOpacity onPress= {() => this.changeLanguage('vn')}>
        //     <Text>
        //       Vietnamese
        //     </Text>
        //   </TouchableOpacity>
        // </View>
//         <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
//           { themes.map(theme => (
//             <Button key={theme.name} style={styles.button} onPress={() => theme.apply()}>
//               <Theme.Text style={{ color: '@buttonText' }}>
//                 {theme.name}
//               </Theme.Text>
//             </Button>
//             ))
//           }
//         </View>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { reload} from '../actions';
import I18n from '../styles/i18n';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput, StatusBar } from 'react-native';
import Theme,{ createTheme, createStyle,  createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles'

const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);

class Settings extends Component {
  changeLanguage(val){
    I18n.locale = val;
    this.props.dispatch(reload(this.props.reload));
  }
  render() {
    return (
      <Theme.View style={themedstyles.container}>
        <Theme.View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
        <Theme.Image source="@icon" />
        <Theme.Text style={themedstyles.welcome}>
          React Native Theming Demo!
        </Theme.Text>
        <Theme.Text style={themedstyles.instructions}>
          To experiment check app.js file
        </Theme.Text>
        <View style={{ flexDirection: 'row' }}>
          { themes.map(theme => (
            <Button
              key={theme.name}
              style={[themedstyles.button, themedstyles.genericButton]}
              onPress={() => theme.apply()}>
              <Theme.Text style={[themedstyles.buttonText, { color: '@buttonText' }]}>
                {theme.name}
              </Theme.Text>
            </Button>
            ))
          }
        </View>
      </Theme.View>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    reload: state.reloadReducer.reload
  }
}
export default connect(mapStateToProps)(Settings);
