import React, { Component } from "react";
import { Content } from 'native-base';
import { connect } from 'react-redux';
import { onTouchChangeTab} from '../actions';
import { View, StyleSheet, ScrollView, Animated, Text, ToastAndroid, TouchableOpacity,Dimensions} from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import SearchTab from '../containers/SearchTab'

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
    const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
                        'Title', 'Title2', 'Tilte3', 'Title4', 'Title5',
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
    const heightArr = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30,30, 30, 30, 30, 30];
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.headText}>Quote is delayed for at least 15 mins</Text>
        </View>
        <View style={{padding:10}}>
            <Text style={{fontSize:20,color:'blue',textAlign:'center'}}>HK Index Futures</Text>
        </View>
        <View style={{backgroundColor:'#efefef'}}>
            <SearchTab/>
        </View>
        <Table style={styles.table}>
          <TableWraper style={{flexDirection: 'row'}}>
            <Cell condition={true} data="Symbol"
            style={{flex : 1, width: 60, height: 30, backgroundColor: 'white'}} textStyle={styles.headText}/>
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
              <TableWraper style={{flex : 1}}>
                {
                  tableTitle.map((data, i) =>(
                    <TouchableOpacity onPress= {() => this.changeTab(17)}>
                      <Cell condition={true} key={i} data={data} style={[styles.list, i%2 && {backgroundColor: 'white'}, {width: 60, height: 30}]}  textStyle={styles.listText}/>
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
                      <Row key={i} data={data} height={30} style={[styles.list, i%2 && {backgroundColor: 'white'}]} widthArr={widthArr} textStyle={styles.listText}/>
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
  table: { width:Dimensions.get('window').width , flexDirection: 'column' , flex: 1},
  head: { backgroundColor: 'white', height: 30},
  headText: { color: 'black', textAlign: 'center'},
  titleText: { marginLeft: 6 },
  list: { height: 30, backgroundColor: 'white' },
  listText: { textAlign: 'center', marginRight: 6 },
  container: {
    backgroundColor: '#efefef',
    width: Dimensions.get('window').width,
    padding:5
  },
  headText:{
    alignSelf: 'flex-end',
    fontSize:10
  },
})
const mapStateToProps = (state,ownProps) =>{
  return{
    bodyNumber: state.navigatorReducer.bodyNumber,
  }
}
export default connect(mapStateToProps)(Quotes);
