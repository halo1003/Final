import React, { Component } from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Dimensions} from 'react-native';
import {Content} from 'native-base';
import { onTouchChangeSegment} from '../actions';
import {connect} from 'react-redux';

class OrderSegments extends Component {
  constructor (){
    super();
    this.state={

    }
      this.switchColor = this.switchColor.bind(this);
      this.switchColortext= this.switchColortext.bind(this);
  }
  switchColor(selected) {
    if(selected)
      return 'blue';
    return 'white';
  }
  switchColortext(selected){
    if(selected)
      return 'white';
    return 'black'
  }

  changeSegment(value){
     this.props.dispatch(onTouchChangeSegment(value));
   }

  render () {
    return (
      <Content>
          <View style={styles.ordersegment}>
              <TouchableHighlight style={[styles.buttonsegments, {backgroundColor:this.switchColor(this.props.segmentName == 'Queued')}]}
                  onPress= {() => this.changeSegment('Queued')}
                  >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Queued')}]}>Queued</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName == 'Fully_Filled')}]}
                onPress= {() => this.changeSegment('Fully_Filled')}
                >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Fully_Filled')}]}>Fully Filled</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName == 'Cancelled')}]}
                onPress= {() => this.changeSegment('Cancelled')}
              >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Cancelled')}]}>Cancelled</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName_Orderbook == 'All')}]}
                onPress= {() => this.changeSegment('All')}
              >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName_Orderbook == 'All')}]}> All</Text>
              </TouchableHighlight>
          </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
    ordersegment : {
      flex:1,
      flexDirection:'row',
      marginHorizontal:10,
      justifyContent:'center',
    },
    buttonsegments : {
      borderWidth:1,
      height:35,
      justifyContent:'center',
      width:Dimensions.get('window').width/4,
    },
    textsegments : {
      textAlign:'center',
    }
})

const mapStateToProps = (state,ownProps) =>{
  return{
    segmentName: state.segmentReducer.segmentName,
    segmentName_Orderbook: state.segmentReducer.segmentName_Orderbook
  }
}
export default connect(mapStateToProps)(OrderSegments);
