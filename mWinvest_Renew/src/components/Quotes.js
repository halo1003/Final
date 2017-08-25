import React, { Component } from "react";
import { Content } from 'native-base';
import { connect } from 'react-redux';
import { onTouchChangeTab} from '../actions';
import { View, StyleSheet, ScrollView, Animated, Text, ToastAndroid, TouchableOpacity} from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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
    const tableHead = ['Chart', 'Last', 'Net Chng', 'Open', 'Bid', 'Ask', 'Head8', 'Head9', 'Head10','Head11','KIKI'];
    const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'KIKI','Title', 'Title2', 'Tilte3', 'Title4',
                        'Title5','kiki','Title', 'Title2', 'Tilte3',
                        'Title4', 'Title5','KIKI',];
    const tableData = [
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],

      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],

      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],

      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
      [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10,'kiki'],
    ];
    const widthArr = [80, 80, 80, 80, 80, 80, 80, 80, 80, 80,80];
    const heightArr = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30,30, 30, 30, 30, 30];
    return (
      <View style={{flex: 1}}>
        <Table style={styles.table}>
          <TableWraper style={{flexDirection: 'row'}}>
            <Cell data="Symbol" style={{flex : 1, width: 90, height: 30, backgroundColor: 'white'}} textStyle={styles.headText}/>
            <TableWraper style={{flex : 5, backgroundColor: 'white', height: 30}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator = {true}
                ref = {(instance) => topScroll = instance}
                scrollEventThrottle={16}
                onTouchMove={this.topScrollStartDrag}
                onScroll= {this.handleTop}
              >
                <Row data={tableHead} style={{backgroundColor: 'white'}} textStyle={styles.headText} widthArr={widthArr}/>
              </ScrollView>
            </TableWraper>
          </TableWraper>
          <ScrollView horizontal={false} showsVerticalScrollIndicator = {true}>
            <TableWraper style={{flexDirection: 'row'}}>
              <TableWraper style={{flex : 1.01}}>
                {
                  tableTitle.map((data, i) =>(
                    <TouchableOpacity onPress= {() => this.changeTab(17)}>
                      <Cell key={i} data={data} style={[styles.list, i%2 && {backgroundColor: 'white'}, {width: 60, height: 30}]}  textStyle={styles.listText}/>
                    </TouchableOpacity>
                  ))
                }
              </TableWraper>
              <TableWraper style={{flex : 5}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator = {true}
                  ref = {(instance) => bottomScroll = instance}
                  scrollEventThrottle={16}
                  onTouchMove={this.bottomScrollStartDrag}
                  onScroll= {this.handleBottom}
                >
                <TableWraper style={{flexDirection: 'column'}}>
                  {
                  tableData.map((data, i) => (
                    <TouchableOpacity onPress= {() => this.changeTab(17)}>
                      <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: 'white'}]} widthArr={widthArr} textStyle={styles.listText}/>
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
  head: { backgroundColor: 'white', height: 50},
  headText: { color: 'black', textAlign: 'right' },
  titleText: { marginLeft: 6 },
  list: { height: 30, backgroundColor: 'white' },
  listText: { textAlign: 'right', marginRight: 6 }
})
const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}
export default connect(mapStateToProps)(Quotes);
