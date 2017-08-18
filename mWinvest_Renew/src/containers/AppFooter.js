/////////////////////////////Toan'scode ////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView,TouchableOpacity,Image,PanResponder} from 'react-native';
import {Footer,FooterTab, Container ,Button,Icon, Content} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchChangeTab} from '../actions';
import Modal from 'react-native-modal';
import styles from '../styles/styles';
import { Col, Row, Grid } from "react-native-easy-grid";
import I18n from '../styles/i18n';
import Theme,{createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles';

const ThemedFooterTab = createThemedComponent(FooterTab);
const ThemedIcon = createThemedComponent(Icon);
const ThemedGrid = createThemedComponent(Grid);
const ThemedCol = createThemedComponent(Col);
const ThemedButton = createThemedComponent(TouchableOpacity);

 class AppFooter extends Component {
   constructor(){
       super ();
       this.state = {
         isModalVisible: false,
       };
       this.switchColor = this.switchColor.bind(this);
  }
  switchColor(selected) {
    if(selected)
      return '@buttonColor';
    return 'grey';
  }
   setModalVisible(visible) {
    this.setState({isModalVisible: visible});
   }
   changeTab(value){
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
      <Text style = {{fontSize:8}}>{I18n.t('More')}</Text>
    </Button>
  )

  _onModalDisable = () =>(
    <Button onPress= {this._showModal}>
      <ThemedIcon active name="more"
            style = {{color : this.switchColor(this.props.bodyNumber > 4  && this.props.bodyNumber < 15),fontSize:30}}/>
      <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber > 4  && this.props.bodyNumber < 15),fontSize:8}}>{I18n.t('More')}</Theme.Text>
    </Button>
  )

  _TabMenupanel = (modal) => (
    <ThemedFooterTab style={{backgroundColor:'@backgroundColor'}}>

      {/* Button apps in modal */}
      <Button onPress= {() => this.changeTab(1)}>
        <ThemedIcon name="apps"
              style = {{color : this.switchColor(this.props.bodyNumber == 1),fontSize:30}}/>
        <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 1),fontSize:8}}>{I18n.t('Quote')}</Theme.Text>
      </Button>

      {/* Button Camera in modal */}
      <Button onPress= {() => this.changeTab(2)}>
        <ThemedIcon name="camera"
              style = {{color : this.switchColor(this.props.bodyNumber == 2),fontSize:30}}/>
        <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 2),fontSize:8}}>{I18n.t('NewOrder')}</Theme.Text>
      </Button>

      {/* Button book in modal */}
      <Button onPress= {() => this.changeTab(3)}>
        <ThemedIcon name="book"
              style = {{color : this.switchColor(this.props.bodyNumber == 3),fontSize:30}}/>
        <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 3),fontSize:7}}>{I18n.t('OrderBook')}</Theme.Text>
      </Button>

      {/* Button navigate in modal */}
      <Button onPress= {() => this.changeTab(4)}>
        <ThemedIcon name="navigate"
              style = {{color : this.switchColor(this.props.bodyNumber == 4),fontSize:30}}/>
        <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 4),fontSize:8}}>{I18n.t('Portfolio')}</Theme.Text>
      </Button>

      {/* Button more in modal */}
      {modal ==='enable' ? this._onModalEnable():this._onModalDisable()}
    </ThemedFooterTab>
  )

  _renderModalContent = () => (
    <View style = {{justifyContent: 'flex-end'}}>
      <Theme.View style={{backgroundColor:'@backgroundColor',padding:10}}>
        <Text>StatusBar</Text>
      </Theme.View>

      {/* Panel */}
      <View style ={{height:55,backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#EEEEEE',borderBottomWidth:0.5,borderBottomColor:'#EEEEEE'}}>
        <Footer>{this._TabMenupanel('enable')}</Footer>
      </View>

      {/* Grid */}
      <ScrollView style={{backgroundColor:'white'}}>
        <ThemedGrid>
          {/* Column left*/}
          <ThemedCol>
            {/* Button Account in modal collumn left */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(5)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 5)}}
                       source = {require('../images/account.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 5)}}>{I18n.t('Account')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Price Alert in modal collumn left */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(6)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 6)}}
                       source = {require('../images/Pipe.png')}/>
                <Theme.Text style={{fontSize:8,paddingLeft:10, color:this.switchColor(this.props.bodyNumber == 6)}}>{I18n.t('PriceAlert')} </Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Markets in modal collumn left */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(7)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 7)}}
                       source = {require('../images/market.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 7)}}>{I18n.t('Markets')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Passwords in modal collumn left */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(8)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 8)}}
                       source = {require('../images/lock.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 8)}}>{I18n.t('Passwords')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Contacts in modal collumn left */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(9)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 9)}}
                       source = {require('../images/contacts.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 9)}}>{I18n.t('Contacts')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

{/*//////////////////////////////////// Additional Button left /////////////////////////////////////////*/}

          </ThemedCol>

          {/* Column Right */}
          <ThemedCol>
            {/* Button Help in modal collumn right */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(10)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 10)}}
                       source = {require('../images/help.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 10)}}>{I18n.t('Help')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Messages in modal collumn right */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(11)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 11)}}
                       source = {require('../images/message.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 11)}}>{I18n.t('Messages')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Fund Transfer in modal collumn right */}
            <ThemedButton style={themedstyles.footerBtn} onPress= {() => this.changeTab(12)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 12)}}
                       source = {require('../images/fundtranfer.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 12)}}>{I18n.t('FundTransfer')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Services in modal collumn right */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(13)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 13)}}
                       source = {require('../images/person.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 13)}}>{I18n.t('Services')}</Theme.Text>
              </Theme.View>
            </ThemedButton>

            {/* Button Transactions in modal collumn right */}
            <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(14)}>
              <Theme.View style={themedstyles.footerItem}>
                <Theme.Image style={{height:30,width:30, tintColor:this.switchColor(this.props.bodyNumber == 14)}}
                       source = {require('../images/transaction.png')}/>
                <Theme.Text style={{paddingLeft:10,fontSize:8, color:this.switchColor(this.props.bodyNumber == 14)}}>{I18n.t('Transactions')}</Theme.Text>
              </Theme.View>
            </ThemedButton>


{/*///////////////////////////////// Additional button right /////////////////////////////////////////////////*/}
          </ThemedCol>
        </ThemedGrid>
      </ScrollView>
    </View>
  );

render() {
  return (
    <Footer>
      <Modal isVisible={this.state.isModalVisible} style={{margin:0,justifyContent:'flex-end'}}
        {...this.panResponder.panHandlers}>
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
    reload: state.reloadReducer.reload
  }
}
export default connect(mapStateToProps)(AppFooter);
