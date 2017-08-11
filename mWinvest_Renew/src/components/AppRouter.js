import React, { Component } from 'react';
import { Container } from 'native-base';

import AppBody from '../containers/AppBody';
import AppHeader from '../containers/AppHeader';
import AppFooter from '../containers/AppFooter';
//import Portfolio from './Portfolio';
import Quotes from './Quotes';
import Order from './Order';
import AccountBalance from './AccountBalance';
import Positions from './Positions';
import Watchlists from './Watchlists';
import { connect } from 'react-redux';


 class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <AppHeader/>
          {  this.props.bodyNumber == 1 ? <Quotes/>
            : this.props.bodyNumber == 2 ? <Order/>
            : this.props.bodyNumber == 20 ? <Positions/>
            : this.props.bodyNumber == 21 ? <AccountBalance/>
            : <Watchlists/>}
        <AppFooter/>
      </Container>
    );
  }
}
const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}

export default connect(mapStateToProps)(AppRouter);
