
import React, { Component } from 'react';
import { reload} from '../actions';
import I18n from '../styles/i18n';
import {connect} from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, ListView, ScrollView,TextInput, StatusBar } from 'react-native';
import Theme,{ createTheme, createStyle,  createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles';
import Segments from '../containers/Segments';

const Button = createThemedComponent(TouchableOpacity);
const Bar = createThemedComponent(StatusBar, ['barStyle', 'backgroundColor']);

class Settings extends Component {
  render() {
    return (
      <Theme.View style={themedstyles.container}>
        <Segments />
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

export default Settings
