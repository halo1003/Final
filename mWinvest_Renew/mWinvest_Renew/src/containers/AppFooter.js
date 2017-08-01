import React, { Component } from 'react';
import {Modal,View,Text,TextInput,ScrollView } from 'react-native';
import {Footer,FooterTab,Button,Icon} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchStockList, onTouchOrder, onTouchPortfolio,onTouchTaskmenu} from '../actions';


 class AppFooter extends Component {
   constructor(){
       super ();
       this.state = {
         modalVisible: false,
       }
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
      render() {
        return (
          <Footer>
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => this.setState({modalVisible:false})}
              >
              <View style={{backgroundColor:'red'}}>
                  <Text>Hello world</Text>
              </View>
              </Modal>
            <FooterTab style={{backgroundColor:'white'}}>
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

              <Button vertical onPress= {()=>{this.setModalVisible(!this.state.modalVisible)}}>
                <Icon active name="more" />
                <Text>More</Text>
              </Button>
            </FooterTab>
          </Footer>
        );
      }
}

export default connect()(AppFooter);
