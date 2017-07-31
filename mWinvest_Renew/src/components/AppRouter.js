import React, { Component } from 'react';
import { Container, Content,  Header, Left, Body, Right, Footer, FooterTab, Button, Icon, Text, Title  } from 'native-base';
import StockList from './StockList';
import Order from './Order';
import Portfolio from './Portfolio';
import { connect } from 'react-redux';
import { onTouchStockList, onTouchOrder, onTouchPortfolio } from '../actions';

class AppRouter extends Component {

  constructor(props) {
    super(props);
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
      <Container>
        <Header>
         <Left>
           <Button transparent>
             <Icon name='arrow-back' />
           </Button>
         </Left>
         <Body>
           <Title>
             {this.props.Order ? 'Order' : this.props.Portfolio ? 'Portfolio':  'StockList'}
           </Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='menu' />
           </Button>
         </Right>
       </Header>

      {this.props.Order ? <Order/> : this.props.Portfolio ? <Portfolio/>:<StockList/>}

      <Content/>

        <Footer>
          <FooterTab>
            <Button vertical onPress= {this._onTouchStockList}>
              <Icon name="apps" />
              <Text>StockList</Text>
            </Button>

            <Button vertical onPress= {this._onTouchOrder}>
              <Icon name="camera" />
              <Text>Order</Text>
            </Button>

            <Button vertical onPress= {this._onTouchPortfolio}>
              <Icon active name="navigate" />
              <Text>Portfolio</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
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

export default connect(mapStateToProps)(AppRouter);
