import React, { Component } from 'react';
import {Alert,View,Text,TouchableHighlight,StyleSheet,Dimensions} from 'react-native';
import {Content} from 'native-base';
import { onTouchChangeSegment} from '../actions';
import {connect} from 'react-redux';

class AlertSegment extends Component {
  constructor (){
    super();
    this.state={

    }
      this.switchColor = this.switchColor.bind(this);
      this.switchColortext= this.switchColortext.bind(this);
  }
  switchColor(selected){

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
      console.log(this.props);
    return (
      <Content>
          <View style={styles.ordersegment}>
              <TouchableHighlight style={[styles.buttonsegments, {backgroundColor:this.switchColor(this.props.segmentName == 'Active')}]}
                  onPress= {() => this.changeSegment('Active')}
                  >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Active')}]}>Active</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName == 'Triggered')}]}
                onPress= {() => this.changeSegment('Triggered')}
                >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Triggered')}]}>Triggered</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName == 'Cancelled_Alert')}]}
                onPress= {() => this.changeSegment('Cancelled_Alert')}
              >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'Cancelled_Alert')}]}>Cancelled</Text>
              </TouchableHighlight>

              <TouchableHighlight style={[styles.buttonsegments,{backgroundColor:this.switchColor(this.props.segmentName == 'All_Alert')}]}
                onPress= {() => this.changeSegment('All_Alert')}
              >
                  <Text style={[styles.textsegments,{color:this.switchColortext(this.props.segmentName == 'All_Alert')}]}> All</Text>
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
    segmentName: state.segmentReducer.segmentName
  }
}
export default connect(mapStateToProps)(AlertSegment);
