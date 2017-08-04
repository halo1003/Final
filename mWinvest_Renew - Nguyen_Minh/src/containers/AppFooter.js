









/////////////////////////////////////////////original code//////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import {Modal,View,Text,TextInput,ScrollView } from 'react-native';
// import {Footer,FooterTab, Content ,Button,Icon} from 'native-base';
// import AppRouter from '../components/AppRouter';
// import {connect} from 'react-redux';
// import { onTouchStockList, onTouchOrder, onTouchPortfolio,onTouchTaskmenu} from '../actions';
//  class AppFooter extends Component {
//    constructor(){
//        super ();
//        this.state = {
//          modalVisible: false,
//        }
//      }
//    setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//      }
//
//    _onTouchStockList = () =>{
//      this.props.dispatch(onTouchStockList());
//    }
//
//    _onTouchOrder = () => {
//      this.props.dispatch(onTouchOrder());
//    }
//
//    _onTouchPortfolio = () => {
//      this.props.dispatch(onTouchPortfolio());
//    }
//       render() {
//         return (
//           <Footer>
//             <Modal
//               style={{ backgroundColor:'transparent'}}
//               animationType={"slide"}
//               transparent={true}
//               visible={this.state.modalVisible}
//               onRequestClose={() => this.setState({modalVisible:false})}
//               >
//               <View style={{ backgroundColor:'transparent',flex: 2}}>
//               </View>
//               <View style={{backgroundColor:'red', flex: 1}}>
//               <FooterTab style={{backgroundColor:'white'}}>
//                 <Button  onPress= {this._onTouchStockList}>
//                   <Icon name="apps" />
//                   <Text>Quotes</Text>
//                 </Button>
//
//                 <Button  onPress= {this._onTouchOrder}>
//                   <Icon name="camera" />
//                   <Text>Order</Text>
//                 </Button>
//
//                 <Button  onPress= {this._onTouchPortfolio}>
//                   <Icon active name="navigate" />
//                   <Text>Port</Text>
//                 </Button>
//
//                 <Button  onPress= {()=>{this.setModalVisible(!this.state.modalVisible)}}>
//                   <Icon active name="more" />
//                   <Text>More</Text>
//                 </Button>
//               </FooterTab>
//               <Content/>
//               </View>
//               </Modal>
//             <FooterTab style={{backgroundColor:'white'}}>
//               <Button onPress= {this._onTouchStockList}>
//                 <Icon name="apps"
//                   style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
//                 />
//                 <Text
//                   style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
//                 >Quotes</Text>
//               </Button>
//               <Button onPress= {this._onTouchOrder}>
//                 <Icon name="camera"
//                   style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
//                 />
//                 <Text
//                   style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
//                 >Order</Text>
//               </Button>
//               <Button onPress= {this._onTouchPortfolio}>
//                 <Icon name="navigate"
//                   style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
//                 />
//                 <Text
//                   style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
//                 >Port</Text>
//               </Button>
//               <Button
//                 onPress= {()=>{this.setModalVisible(!this.state.modalVisible)}}
//               >
//                 <Icon active name="more" />
//                 <Text>More</Text>
//               </Button>
//             </FooterTab>
//           </Footer>
//         );
//       }
// }
// const mapStateToProps = (state,ownProps) =>{
//   return{
//     bodyNumber: state.navigatorReducer.bodyNumber,
//   }
// }
// export default connect(mapStateToProps)(AppFooter);





/////////////////////////////Toan'scode ////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {View,Text,TextInput,ScrollView,TouchableHighlight,Image,PanResponder} from 'react-native';
import {Footer,FooterTab, Content ,Button,Icon} from 'native-base';
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
  //  _onTouchStockList = () =>{
  //    this.props.dispatch(onTouchStockList());
  //  }
   //
  //  _onTouchOrder = () => {
  //    this.props.dispatch(onTouchOrder());
  //  }
   //
  //  _onTouchPortfolio = () => {
  //    this.props.dispatch(onTouchPortfolio());
  //  }
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

  _renderModalContent = () => (
    <View>
      <View style={{backgroundColor:'white',padding:10}}>
        <Text>StatusBar</Text>
      </View>
    <View style ={{height:60,backgroundColor:'white',borderTopWidth:0.5,borderTopColor:'#EEEEEE',borderBottomWidth:0.5,borderBottomColor:'#EEEEEE',paddingTop:10}}>
      <FooterTab style={{backgroundColor:'white'}}>
              <Button onPress= {() => this.changeTab(1)}>
                <Icon name="apps"
                  style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
                >Quotes</Text>
              </Button>
              <Button onPress= {() => this.changeTab(2)}>
                <Icon name="camera"
                  style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
                >Order</Text>
              </Button>
              <Button onPress= {() => this.changeTab(3)}>
                <Icon name="navigate"
                  style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
                >Port</Text>
              </Button>
              <Button onPress= {this._hideModal}>
                <Icon active name="more"/>
                <Text
                  //style = {{color : ((this.props.bodyNumber > 4 && !this.state.visibleModal) ? 'blue' : 'grey')}}
                >More</Text>
              </Button>
            </FooterTab>
    </View>
    <View style={{height:230}}>
      <Grid>
        <Col>
          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(5)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 5 ? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 5 ? 'blue' : 'grey')}}>Account</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(6)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 6 ? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 6 ? 'blue' : 'grey')}}>Price Alert</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(7)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 7 ? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 7 ? 'blue' : 'grey')}}>Markets</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(8)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 8 ? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 8 ? 'blue' : 'grey')}}>Passwords</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(9)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 9 ? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 9 ? 'blue' : 'grey')}}>Contacts</Text>
            </View>
          </TouchableHighlight>
        </Col>

        <Col>
          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(10)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 10? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 10 ? 'blue' : 'grey')}}>Help</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(11)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 11? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 11? 'blue' : 'grey')}}>Messages</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(12)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 12? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 12? 'blue' : 'grey')}}>Fund Transfer</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(13)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 13? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 13? 'blue' : 'grey')}}>Services</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.footerBtn}
            onPress= {() => this.changeTab(14)}
          >
            <View style={styles.footerItem}>
              <Image
                style={{height:30,width:30, tintColor:(this.props.bodyNumber == 14? 'blue' : 'grey')}}
                source = {require('../images/person.png')}
              />
              <Text style={{paddingLeft:10, color:(this.props.bodyNumber == 14? 'blue' : 'grey')}}>Transactions</Text>
            </View>
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
            <Modal isVisible={this.state.isModalVisible} style={{justifyContent: 'flex-end',margin: 0, height:200}}
             {...this.panResponder.panHandlers}
             onRequestClose= {this._hideModal}
             >
              {this._renderModalContent()}
            </Modal>

            <FooterTab style={{backgroundColor:'white'}}>
              <Button onPress = {() => this.changeTab(1)}>
                <Icon name="apps"
                  style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 1 ? 'blue' : 'grey')}}
                >Quotes</Text>
              </Button>
              <Button onPress= {() => this.changeTab(2)}>
                <Icon name="camera"
                  style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 2 ? 'blue' : 'grey')}}
                >Order</Text>
              </Button>
              <Button onPress= {() => this.changeTab(3)}>
                <Icon name="navigate"
                  style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : (this.props.bodyNumber == 3 ? 'blue' : 'grey')}}
                >Port</Text>
              </Button>
              <Button onPress= {()=>{this._showModal()}}>
                <Icon active name="more"
                  style = {{color : ((this.props.bodyNumber > 4) ? 'blue' : 'grey')}}
                />
                <Text
                  style = {{color : ((this.props.bodyNumber > 4) ? 'blue' : 'grey')}}
                >More</Text>
              </Button>
            </FooterTab>
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
