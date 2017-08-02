import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView } from 'react-native';
import {Footer,FooterTab, Content ,Button,Icon,Grid,Col} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchStockList, onTouchOrder, onTouchPortfolio,onTouchTaskmenu} from '../actions';
import Modal from 'react-native-modal';


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

    <Footer noShadow>
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

        <Button vertical onPress= {this._hideModal}>
          <Icon active name="more" />
          <Text>More</Text>
        </Button>
      </FooterTab>
    </Footer>

<View>
  <Grid>
      <Col>
        <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
      </Col>
        <Button iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        </Button>
        <Button iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        </Button>
        <Button iconLeft light>
          <Icon name='arrow-back' />
          <Text>Back</Text>
        </Button>
      <Col>

      </Col>
  </Grid>
</View>

    </View>
  );


      render() {
        return (
          <Footer>
            <Modal isVisible={this.state.isModalVisible} style={{justifyContent: 'flex-end',margin: 0, height:200}}>
              {this._renderModalContent()}
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
