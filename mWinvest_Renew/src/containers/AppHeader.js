import React, { Component } from 'react';
import { View,Text,TextInput,ScrollView } from 'react-native';
import {Header,Left,Button,Icon,Body,Right,Title} from 'native-base';
import {connect} from 'react-redux';
class AppHeader extends Component {
      render() {
        return (
          <Header noShadow>
           <Left>
             <Button transparent>
               <Icon name='arrow-back' />
             </Button>
           </Left>
           <Body>
             <Title>
               {this.props.Order ? 'Orders' : this.props.Portfolio ? 'Portfolios':  'Quotes'}
             </Title>
           </Body>
           <Right>
             <Button transparent>
               <Icon name='menu'/>
             </Button>
           </Right>
         </Header>
        );
      }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    StockList: state.navigatorReducer.StockList,
    Order: state.navigatorReducer.Order,
    Portfolio: state.navigatorReducer.Portfolio
  }
}

export default connect(mapStateToProps)(AppHeader);
