import React, { Component } from "react";
import { Content } from 'native-base';
import { connect } from 'react-redux';
import { onTouchChangeTab} from '../actions';
import { View, StyleSheet, ScrollView, Animated, Text, ToastAndroid, TouchableOpacity} from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell, Cell1 } from 'react-native-table-component';

class Quotes extends Component {

  constructor(props) {
    super(props);
    topScrolling = false;
    bottomScrolling = false;
    topScroll = null;
    bottomScroll = null;
  }
  topScrollStartDrag(){
    topScrolling = true;
    bottomScrolling = false;
  }
  bottomScrollStartDrag(){
    topScrolling = false;
    bottomScrolling = true;
  }
  handleTop(event){
    if(!bottomScrolling){
      bottomScroll.scrollTo(
        {x: event.nativeEvent.contentOffset.x, y: 0, animated: false}
      );
    }
  }
  handleBottom(event){
    if(!topScrolling){
      topScroll.scrollTo(
        {x: event.nativeEvent.contentOffset.x, y: 0, animated: false}
      );
    }
  }
  changeTab(value){
    this.props.dispatch(onTouchChangeTab(value));
  }

  render() {
    const tableHead = ['Chart', 'Last', 'Net Chng', 'Open', 'Bid', 'Ask','Head7', 'Head8', 'Head9', 'Head10'];
    const tableTitle = [{id:'HSI',name:'Hang Seng In...'}, {id : 'FSI', name:'Hang Sen In...'}, {id:'USI',name:'HS Utilities Su...'}, {id:'PSI', name:'HS Commerce...'}, {id:'CSI',name:'HS properties...'},
  ];

const tableData = [
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],

  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10],
];
const widthArr = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100];
const heightArr = [60,60, 60, 60, 60, 60, 60,60, 60, 60, 60, 60, 60,60, 60, 60, 60, 60];
return (
  <View style={{flex: 1}}>
    <Table style={styles.table}>
      <TableWraper style={{flexDirection: 'row'}}>
        <Cell1 condition={1} data="Symbol" style={{width: 110, height: 30, backgroundColor: 'white'}} textStyle={styles.headText}/>
        <TableWraper style={{flex : 1, backgroundColor: 'white', height: 30}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator = {false}
            ref = {(instance) => topScroll = instance}
            scrollEventThrottle={16}
            onTouchMove={this.topScrollStartDrag}
            onScroll= {this.handleTop}
            >
              <Row data={tableHead} height= {30} style={{backgroundColor: 'white'}} textStyle={styles.headText} widthArr={widthArr}/>
            </ScrollView>
          </TableWraper>
        </TableWraper>
        <ScrollView horizontal={false} showsVerticalScrollIndicator = {true}>
          <TableWraper style={{flexDirection: 'row'}}>
            <TableWraper>
              {
                tableTitle.map((data, i) =>(
                  <TouchableOpacity onPress= {() => this.changeTab(17)}>
                    <Cell condition={1} key={i} data={data} style={[styles.list, {height: 50, width:110}]}  textStyle={styles.listText}/>
                  </TouchableOpacity>
                ))
              }
            </TableWraper>
            <TableWraper>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator = {true}
                ref = {(instance) => bottomScroll = instance}
                scrollEventThrottle={16}
                onTouchMove={this.bottomScrollStartDrag}
                onScroll= {this.handleBottom}
                >
                  <TableWraper>
                    {
                      tableData.map((data, i) => (
                        <TouchableOpacity onPress= {() => this.changeTab(17)}>
                          <Row key={i} data={data} height = {50} style={[styles.list, i%2 && {backgroundColor: 'white'}]} widthArr={widthArr} textStyle={styles.listText}/>
                        </TouchableOpacity>
                      ))
                    }
                  </TableWraper>
                </ScrollView>
              </TableWraper>
            </TableWraper>
          </ScrollView>
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: { width: 360, flexDirection: 'column' , flex: 1},
  head: { backgroundColor: 'white', height: 30},
  headText: { color: 'black', textAlign: 'center'},
  list: {height: 50, backgroundColor: 'white' },
  listText: { marginRight: 0}
})
const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}
export default connect(mapStateToProps)(Quotes);
