import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView,TouchableHighlight} from 'react-native';
import {Footer,FooterTab, Content ,Button,Icon} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchStockList, onTouchOrder, onTouchPortfolio,onTouchTaskmenu} from '../actions';
import Modal from 'react-native-modal';
import { Col, Row, Grid } from "react-native-easy-grid";

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

  _renderModalContent = () => (
    <View>
      <View style={{backgroundColor:'white',padding:10}}>
        <Text>StatusBar</Text>
      </View>

    <View style ={{height:60,backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#EEEEEE',borderBottomWidth:0.5,borderBottomColor:'#EEEEEE',paddingTop:10}}>
      <FooterTab noShadow style={{backgroundColor:'white'}}>
        <Button  onPress= {this._onTouchStockList}>
          <Icon name="apps" />
          <Text>Quotes</Text>
        </Button>

        <Button vertical onPress= {this._onTouchOrder}>
          <Icon name="camera" />
          <Text>Order</Text>
        </Button>

        <Button vertical onPress= {this._onTouchPortfolio}>
          <Icon active name="navigate" />
          <Text>Port</Text>
        </Button>

        <Button vertical onPress= {this._hideModal}>
          <Icon active name="more" />
          <Text>More</Text>
        </Button>
      </FooterTab>
    </View>
    <View style={{height:230}}>
      <Grid>
        <Col>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch',justifyContent:'center'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>
        </Col>

        <Col>
          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>

          <TouchableHighlight style={{height:45,backgroundColor:'white',borderWidth:0.5,borderColor:'#EEEEEE',alignItems: 'stretch'}}>
            <Text>Account</Text>
          </TouchableHighlight>
        </Col>
      </Grid>
    </View>
<Content/>
    </View>
  );


      render() {
        return (
          <Footer>
            <Modal isVisible={this.state.isModalVisible} style={{justifyContent: 'flex-end',margin: 0, height:200}}>
              {this._renderModalContent()}
            </Modal>

            <FooterTab style={{backgroundColor:'white'}}>
              <Button onPress= {this._onTouchStockList}>
                <Icon name="apps" />
                <Text>Quotes</Text>
              </Button>

              <Button vertical onPress= {this._onTouchOrder}>
                <Icon name="camera" />
                <Text>Order</Text>
              </Button>

              <Button vertical onPress= {this._onTouchPortfolio}>
                <Icon active name="navigate" />
                <Text>Port</Text>
              </Button>

              <Button vertical onPress= {this._showModal}>
                <Icon active name="more" />
                <Text>More</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      }
}

export default connect()(AppFooter);
