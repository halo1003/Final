import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { setUsername, setPassword, login } from '../actions';

const StatusBar = require('../containers/StatusBar');
const ActionButton = require('../containers/ActionButton');
const styles = require('../styles/styles');

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
    };
  }

  onLogin = () =>{
    this.props.dispatch(login(this.state.username,this.state.password));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <StatusBar title="Login Form" />
          </View>

          <View style={styles.box}>
            <TextInput
              onChangeText={(value) => this.setState({username: value})}
              placeholder="Username"
            />

            <TextInput
              onChangeText={(value) => this.setState({password: value})}
              placeholder="Password"
            />
          </View>

        <View style={styles.box}>
          <ActionButton onPress= {this.onLogin} title="Login">
          </ActionButton>
        </View>
      </View>
    </ScrollView>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    authorizing: state.userReducer.authorizing
  }
}

export default connect(mapStateToProps)(Login);
