import React, { Component } from 'react';
import {View,StyleSheet,Text,SectionList } from 'react-native';
import {Content,Container} from 'native-base';
import SearchTab from '../containers/SearchTab';
import AlertSegment from '../containers/AlertSegment';
import AlertAll from '../containers/AlertAll';
import AlertActive from '../containers/AlertActive';
import Order from './Order';
import {connect} from 'react-redux';

class PriceAlert extends Component {
 constructor (props){
   super(props);
 }

 render () {
   return(
   <Content>
     <SearchTab/>
     <AlertSegment/>
   <View>
       {
          this.props.segmentName == 'Active' ? <AlertActive/>
         :this.props.segmentName == 'All_Alert' ? <AlertAll/>
         :<Order/>
       }
     </View>
   </Content>
   );
 }
}

const mapStateToProps = (state,ownProps) =>{
 return{
   segmentName: state.segmentReducer.segmentName,
 }
}

export default connect(mapStateToProps)(PriceAlert);