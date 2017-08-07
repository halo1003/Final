import React, { Component } from 'react';
import {View,Text,TouchableHighlight,Image,ToastAndroid,Dimensions} from 'react-native';
import {FooterTab,Button,Icon,Footer} from 'native-base';
import Modal from 'react-native-modal';
import { Col, Row, Grid } from "react-native-easy-grid";
import {connect} from 'react-redux';
import { onTouchStockList, onTouchOrder, onTouchPortfolio, onStartModal, onStopModal } from '../actions';

 class AppFooter extends Component {
   constructor(){
       super ();
       this.state = {
         visibleModal: false,
       };
     }

   setModalVisible(visible) {
     this.setState({modalVisible: visible});
   }

   _onTouchStockList = () =>{
     this.props.dispatch(onTouchStockList());
   }

   _onTouchOrder = () => {
     this.props.dispatch(onTouchOrder());
   }

   _onTouchPortfolio = () => {
     this.props.dispatch(onTouchPortfolio());
   }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  _onModal = () => {
    if (this.props.Modal === false) this.props.dispatch(onStartModal());
    else this.props.dispatch(onStopModal());
  }

  _renderfoot(){
    return(
      <FooterTab style ={{width: Dimensions.get('window').width}}>
        <Button  onPress= {this._onTouchStockList}>
          <Icon name="apps" />
          <Text style={{fontSize:9}}>Quotes</Text>
        </Button>

        <Button onPress= {this._onTouchOrder}>
          <Icon name="camera" />
          <Text style={{fontSize:9}}>New Order</Text>
        </Button>

        <Button onPress= {this._onTouchPortfolio}>
          <Icon active name="navigate" />
          <Text style={{fontSize:9}}>Order Book</Text>
        </Button>

        <Button>
          <Icon name="camera" />
          <Text style={{fontSize:9}}>Portfolios</Text>
        </Button>

        <Button onPress= {this._onModal}>
          <Icon active name="more" />
          <Text style={{fontSize:9}}>More</Text>
        </Button>
    </FooterTab>
  );
  }

  _renderModalContent = () => (
    <View>
      <View style={{backgroundColor:'white',padding:10}}>
        <Text>StatusBar</Text>
      </View>

    <View style ={{height:60,backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#EEEEEE',borderBottomWidth:0.5,borderBottomColor:'#EEEEEE',paddingTop:10}}>
      {this._renderfoot()}
    </View>
    <View style={{height:230}}>
      <Grid>
        <Col>
          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Account</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Price Alert</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Markets</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Passwords</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Contacts</Text>
            </View>
          </TouchableHighlight>
        </Col>

        <Col>
          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Help</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Messages</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Fund Transfer</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Services</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <View style={{alignItems:'center',flexDirection:'row',padding:20}}>
              <Image style={{height:30,width:30}} source = {require('../images/person.png')}/>
              <Text style={{paddingLeft:10}}>Transactions</Text>
            </View>
          </TouchableHighlight>

        </Col>
      </Grid>
    </View>
    </View>
  );

componentDidUpdate(){
  ToastAndroid.show(this.props.Modal.toString(), ToastAndroid.SHORT);
}

  render() {
    return (
      <View>
        <Modal style={{justifyContent: 'flex-end',margin: 0, height:200}}>
          {this._renderModalContent()}
        </Modal>
      <Footer>
        {this._renderfoot()}
      </Footer>
      </View>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    Modal: state.navigatorReducer.Modal,
  }
}

export default connect(mapStateToProps)(AppFooter);
