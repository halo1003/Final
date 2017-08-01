import React, { Component } from 'react';
import { Container } from 'native-base';

import AppBody from '../containers/AppBody';
import AppHeader from '../containers/AppHeader';
import AppFooter from '../containers/AppFooter';
import Portfolio from './Portfolio';
import StockList from './StockList';
import Order from './Order';
import { connect } from 'react-redux';


 class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <AppHeader/>
          {this.props.Order ? <Order/> : this.props.Portfolio ? <Portfolio/>:<StockList/>}
        <AppFooter />
      </Container>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    StockList: state.navigatorReducer.StockList,
    Order: state.navigatorReducer.Order,
    Portfolio: state.navigatorReducer.Portfolio,
  }
}

export default connect(mapStateToProps)(AppRouter);
