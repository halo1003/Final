/////////////////////////////Toan'scode ////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView,TouchableOpacity,Image,PanResponder, Dimensions,StyleSheet} from 'react-native';
import {Footer,FooterTab, Container ,Button,Icon, Content} from 'native-base';
import AppRouter from '../components/AppRouter';
import {connect} from 'react-redux';
import { onTouchChangeTab} from '../actions';
import styles from '../styles/styles';
import { Col, Row, Grid } from "react-native-easy-grid";
import I18n from '../styles/i18n';
import Theme,{createThemedComponent} from 'react-native-theming';
var themes = require('../styles/themes');
import themedstyles from '../styles/themedStyles';
import Collapsible from 'react-native-collapsible';
import { FadeInView,FadeOutView } from '../assets/anim';

const ThemedFooterTab = createThemedComponent(FooterTab);
const ThemedIcon = createThemedComponent(Icon);
const ThemedGrid = createThemedComponent(Grid);
const ThemedCol = createThemedComponent(Col);
const ThemedButton = createThemedComponent(TouchableOpacity);

class AppFooter extends Component {
   constructor(){
       super ();
       this.state = {
         collapsed: true,
       };

       this.switchColor = this.switchColor.bind(this);
  }

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  switchColor(selected) {
    if(selected)
      return '@buttonColor';
    return 'grey';
  }

   changeTab(value){
      this.props.dispatch(onTouchChangeTab(value));
      if (this.state.collapsed === false){
        this.state = {
          collapsed: true,
        };
      }
   }

   componentWillMount () {
     this.panResponder = PanResponder.create ({
        onStartShouldSetPanResponder:(event,gestureState) =>true,
        onPanResponderGrant: this._onResponderGrant.bind(this),
     })
   }

   _onResponderGrant(event,gestureState) {
     if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
         this._toggleExpanded();
      }
   }

  _blurScreenFadeIn=()=>(
    <FadeInView style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'rgba(47, 79, 79, 0.7)'}}></View>
    </FadeInView>
  )

  _blurScreenFadeOut=()=>(
    <FadeOutView style={{flex:1}}>
        <View pointerEvents="none" style={{flex:1,backgroundColor:'rgba(47, 79, 79, 0.7)'}}></View>
    </FadeOutView>
  )

  _rawMenu =()=>(
    <Collapsible collapsed={this.state.collapsed} align="top">
        <ScrollView style={{backgroundColor:'white'}}>
          <ThemedGrid>
            {/* Column left*/}
            <ThemedCol>

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
              <ThemedButton style={styles.footerBtn} onPress= {() => this.changeTab(12)}>
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

              </ThemedCol>
          </ThemedGrid>
        </ScrollView>
    </Collapsible>
  )

  _TabMenupanel = () => (
    <View>
      <Theme.View style={{backgroundColor:'@backgroundColor',padding:10,borderTopWidth:1,borderColor: '#EEEEEE'}}>
        <Theme.Text style={{color:'@textColor'}}>StatusBar</Theme.Text>
      </Theme.View>

        <Theme.View style={{justifyContent:'space-between',width:Dimensions.get('window').width,flexDirection:'row',backgroundColor:'@backgroundColor'}}>
            <ThemedButton style={stylesInline.buttunMenubar} onPress= {() => this.changeTab(1)}>
              <Theme.Image style = {{height:30,width:30,tintColor : this.switchColor(this.props.bodyNumber == 1),fontSize:30}}
                  source = {require('../images/quote.png')}/>
              <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 1),fontSize:8}}>{I18n.t('Quote')}</Theme.Text>
            </ThemedButton>

            <ThemedButton style={stylesInline.buttunMenubar}onPress= {() => this.changeTab(2)}>
              <Theme.Image source = {require('../images/order.png')}
                    style = {{height:30,width:30,tintColor : this.switchColor(this.props.bodyNumber == 2),fontSize:30}}/>
              <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 2),fontSize:8}}>{I18n.t('NewOrder')}</Theme.Text>
            </ThemedButton>

            <ThemedButton style={stylesInline.buttunMenubar}onPress= {() => this.changeTab(3)}>
              <Theme.Image source = {require('../images/orderbook.png')}
                    style = {{height:30,width:30,tintColor : this.switchColor(this.props.bodyNumber == 3),fontSize:30}}/>
              <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 3),fontSize:7}}>{I18n.t('OrderBook')}</Theme.Text>
            </ThemedButton>

            <ThemedButton style={stylesInline.buttunMenubar}onPress= {() => this.changeTab(4)}>
              <Theme.Image source = {require('../images/porfolio.png')}
                    style = {{height:30,width:30,tintColor : this.switchColor(this.props.bodyNumber == 4),fontSize:30}}/>
              <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber == 4),fontSize:8}}>{I18n.t('Portfolio')}</Theme.Text>
            </ThemedButton>

            <ThemedButton style={stylesInline.buttunMenubar}onPress= {this._toggleExpanded}>
              <ThemedIcon active name="more"
                    style = {{color : this.switchColor(this.props.bodyNumber > 4  && this.props.bodyNumber < 15),fontSize:30}}/>
              <Theme.Text style = {{color : this.switchColor(this.props.bodyNumber > 4  && this.props.bodyNumber < 15),fontSize:8}}>{I18n.t('More')}</Theme.Text>
            </ThemedButton>
        </Theme.View>
    </View>
  )


render() {
  console.log(this.props);
  return (
    <View {...this.panResponder.panHandlers}>

      <View style={{height:90}}></View>
      {this.state.collapsed ? <View style={stylesInline.Mainpage1}>
        {this.state.collapsed ? this._blurScreenFadeOut() : this._blurScreenFadeIn()}
        {this._TabMenupanel()}
        {this._rawMenu()}
      </View>: <View style={stylesInline.Mainpage2}>
        {this.state.collapsed ? this._blurScreenFadeOut() : this._blurScreenFadeIn()}
        {this._TabMenupanel()}
        {this._rawMenu()}
      </View>}


    </View>
    );
  }
}

const stylesInline = StyleSheet.create({
  buttunMenubar:{
    alignItems: 'center',
    flex:1,
    paddingVertical:5,
    borderTopWidth:1,
    borderColor: '#EEEEEE'
  },

  Mainpage1:{
    justifyContent:'flex-end',
    position: 'absolute',
    width:Dimensions.get('window').width,
    bottom:0, left:0, right:0
  },
  Mainpage2:{
    justifyContent:'flex-end',
    position: 'absolute',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    bottom:0, left:0, right:0
  }
});

const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
    reload: state.reloadReducer.reload
  }
}
export default connect(mapStateToProps)(AppFooter);
