/////////////////////////////Toan'scode ////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView,TouchableHighlight,Image,PanResponder} from 'react-native';
import {Footer,FooterTab, Container ,Button,Icon, Content} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchChangeTab,onTouchTaskmenu} from '../actions';
import Modal from 'react-native-modal';
import styles from '../styles/styles';
import { Col, Row, Grid } from "react-native-easy-grid";

 class AppFooter extends Component {
   constructor(){
       super ();
       this.state = {
         isModalVisible: false,
       };
  }

   setModalVisible(visible) {
    this.setState({isModalVisible: visible});
   }
   changeTab(value){
     console.log(value);
      this.props.dispatch(onTouchChangeTab(value));
      if(this.state.isModalVisible){
        this.setState({
          isModalVisible: false,
        })
      }
   }

   componentWillMount () {
     this.panResponder = PanResponder.create ({
        onStartShouldSetPanResponder:(event,gestureState) =>true,
        onPanResponderGrant: this._onResponderGrant.bind(this),
     })
   }

   _onResponderGrant(event,gestureState) {
     if (event.nativeEvent.locationX===event.nativeEvent.pageX) {
            this._hideModal()
          }
   }
  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  _onModalEnable = () =>(
    <Button onPress= {this._hideModal}>
      <Icon active name="more"
            style ={{fontSize:30,color:'grey'}}/>
      <Text style = {{fontSize:8}}>More</Text>
    </Button>
  )

  _onModalDissaple = () =>(
    <Button onPress= {this._showModal}>
      <Icon active name="more"
            style ={{fontSize:30,color:'grey'}}/>
      <Text style = {{fontSize:8}}>More</Text>
    </Button>
  )

  _TabMenupanel = (modal) => (
    <FooterTab style={{backgroundColor:'white'}}>
      {/* Button apps in modal */}
      <Button onPress= {() => this.changeTab(1)}>
        <Icon name="apps"
              style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey'),fontSize:30}}/>
        <Text style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey'),fontSize:8}}>Quotes</Text>
      </Button>

      {/* Button Camera in modal */}
      <Button onPress= {() => this.changeTab(2)}>
        <Icon name="camera"
              style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey'),fontSize:30}}/>
        <Text style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey'),fontSize:8}}>New Order</Text>
      </Button>

      {/* Button book in modal */}
      <Button onPress= {() => this.changeTab(2)}>
        <Icon name="book"
              style = {{color : (this.props.bodyNumber == 4 ? 'blue' : 'grey'),fontSize:30}}/>
        <Text style = {{color : (this.props.bodyNumber == 4 ? 'blue' : 'grey'),fontSize:7}}>Order Book</Text>
      </Button>

      {/* Button navigate in modal */}
      <Button onPress= {() => this.changeTab(3)}>
        <Icon name="navigate"
              style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey'),fontSize:30}}/>
        <Text style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey'),fontSize:8}}>Portfolios</Text>
      </Button>

      {/* Button more in modal */}
      {modal ==='enable' ? this._onModalEnable():this._onModalDissaple()}
    </FooterTab>
  )

  _renderModalContent = () => (
    <View style = {{justifyContent: 'flex-end'}}>
      <View style={{backgroundColor:'white',padding:10}}>
        <Text>StatusBar</Text>
      </View>

      {/* Panel */}
      <View style ={{height:55,backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#EEEEEE',borderBottomWidth:0.5,borderBottomColor:'#EEEEEE'}}>
        <Footer>{this._TabMenupanel('enable')}</Footer>
      </View>

      {/* Grid */}
      <ScrollView style={{backgroundColor:'white'}}>
        <Grid>
          {/* Column left*/}
          <Col>
            {/* Button Account in modal collumn left */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(5)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 5 ? 'blue' : 'grey')}}
                       source = {require('../images/account.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 5 ? 'blue' : 'grey')}}>Account</Text>
              </View>
            </TouchableHighlight>

            {/* Button Price Alert in modal collumn left */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(6)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 6 ? 'blue' : 'grey')}}
                       source = {require('../images/Pipe.png')}/>
                <Text style={{fontSize:8,paddingLeft:10, color:(this.props.bodyNumber == 6 ? 'blue' : 'grey')}}>Price Alert</Text>
              </View>
            </TouchableHighlight>

            {/* Button Markets in modal collumn left */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(7)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 7 ? 'blue' : 'grey')}}
                       source = {require('../images/market.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 7 ? 'blue' : 'grey')}}>Markets</Text>
              </View>
            </TouchableHighlight>

            {/* Button Passwords in modal collumn left */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(8)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 8 ? 'blue' : 'grey')}}
                       source = {require('../images/lock.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 8 ? 'blue' : 'grey')}}>Passwords</Text>
              </View>
            </TouchableHighlight>

            {/* Button Contacts in modal collumn left */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(9)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 9 ? 'blue' : 'grey')}}
                       source = {require('../images/contacts.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 9 ? 'blue' : 'grey')}}>Contacts</Text>
              </View>
            </TouchableHighlight>
          </Col>

          {/* Column Right */}
          <Col>
            {/* Button Help in modal collumn right */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(10)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 10? 'blue' : 'grey')}}
                       source = {require('../images/help.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 10 ? 'blue' : 'grey')}}>Help</Text>
              </View>
            </TouchableHighlight>

            {/* Button Messages in modal collumn right */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(11)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 11? 'blue' : 'grey')}}
                       source = {require('../images/message.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 11? 'blue' : 'grey')}}>Messages</Text>
              </View>
            </TouchableHighlight>

            {/* Button Fund Transfer in modal collumn right */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(12)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 12? 'blue' : 'grey')}}
                       source = {require('../images/fundtranfer.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 12? 'blue' : 'grey')}}>Fund Transfer</Text>
              </View>
            </TouchableHighlight>

            {/* Button Services in modal collumn right */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(13)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 13? 'blue' : 'grey')}}
                       source = {require('../images/person.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 13? 'blue' : 'grey')}}>Services</Text>
              </View>
            </TouchableHighlight>

            {/* Button Transactions in modal collumn right */}
            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(14)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 14? 'blue' : 'grey')}}
                       source = {require('../images/transaction.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 14? 'blue' : 'grey')}}>Transactions</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.footerBtn} onPress= {() => this.changeTab(14)}>
              <View style={styles.footerItem}>
                <Image style={{height:30,width:30, tintColor:(this.props.bodyNumber == 14? 'blue' : 'grey')}}
                       source = {require('../images/transaction.png')}/>
                <Text style={{paddingLeft:10,fontSize:8, color:(this.props.bodyNumber == 14? 'blue' : 'grey')}}>Transactions</Text>
              </View>
            </TouchableHighlight>
          </Col>

        </Grid>
      </ScrollView>
    </View>
  );

render() {
  return (
    <Footer>
      <Modal isVisible={this.state.isModalVisible} style={{margin:0,justifyContent:'flex-end'}}
        {...this.panResponder.panHandlers}
      >
        {this._renderModalContent()}
      </Modal>

        {this._TabMenupanel('dissaple')}
    </Footer>
    );
  }
}

const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}
export default connect(mapStateToProps)(AppFooter);
