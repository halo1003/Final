import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView,Image,Dimensions } from 'react-native';
import {connect} from 'react-redux';
import { setUsername, setPassword, login } from '../actions';
import { Title, Header, Body, Item,Input, Right,Button,Icon,Spinner } from 'native-base';

const styles = require('../styles/styles');

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    };
  }

  onLogin = () =>{
    this.props.dispatch(login(this.state.username,this.state.password));
  }

  render() {
    return (
        <View>
        <View style={{paddingRight:10}}>
            <Button transparent>
              <Icon name='menu' />
            </Button>
        </View>

          <View style = {{alignItems:'center',justifyContent:'center',height:Dimensions.get('window').height/3}}>
            <Image source = {require('../images/ttl_logo.png')}/>
            <Text style = {{paddingTop:10}}>An app is using React Native</Text>
          </View>

          <View style={{padding:20}}>
            <Item>
              <Icon active name='person' />
              <Input style={{fontSize:15}}
                  placeholder='Username'
                  onChangeText={(value) => this.setState({username: value})}/>
            </Item>

            <Item>
              <Icon active name='lock' />
              <Input style={{fontSize:15}}
                  placeholder='Password'
                  secureTextEntry = {true}
                  onChangeText={(value) => this.setState({password: value})}/>
            </Item>

          </View>
          <View style={{margin:20}}>
            {this.props.authorizing ?  <Spinner color='blue' />:
              this.props.notexist ? <Button block onPress= {this.onLogin} style={{alignSelf: 'stretch',alignItems:'center'}}><Text style={{color:'white'}}>Login</Text></Button>:
              <Button block onPress= {this.onLogin} style={{alignSelf: 'stretch',alignItems:'center'}}><Text style={{color:'white'}}>Login</Text></Button>}
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    authorizing: state.userReducer.authorizing,
    authorized:state.userReducer.authorized,
    notexist:state.userReducer.notexist
  }
}

export default connect(mapStateToProps)(Login);
