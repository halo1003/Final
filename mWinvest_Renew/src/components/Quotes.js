import React, { Component } from "react";
import { Content } from 'native-base';
import { View, StyleSheet, ScrollView, Animated, Text} from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Quotes extends Component {

  constructor(props) {
    super(props);
    this.pageScrollPosition = new Animated.Value(0);
    this.pageScrollListener = Animated.event(
      [{nativeEvent: {contentOffset: {y: this.pageScrollPosition }}}]
    );
  }
  componentDidMount() {
    // when the scroll position of the currently visible
    // view changes, update this scrollview position
    this.listener = this.pageScrollPosition.addListener((position) => {
      this.leftScroll.scrollTo({
        x: 0,
        y: position.value,
        animated: false
      });
      this.rightScroll.scrollTo({
        x: 0,
        y: position.value,
        animated: false
      });
    });
  }
  render() {
    const tableHead = ['Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9', 'Head10','Head11','KIKI'];
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
    const widthArr = [60, 60, 60, 60, 60, 60, 60, 60, 60, 60,60];
    const heightArr = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30,30, 30, 30, 30, 30];
    return (
      <View style={{flex: 1}}>
        <Table style={styles.table}>
          <TableWraper style={{width: 80}}>
            <Cell data="Head" style={{flex: 1, backgroundColor: '#333'}} textStyle={styles.headText}/>
            <TableWraper style={{flex : 8}}>
              <ScrollView
                ref = {(instance) => this.leftScroll = instance}
                scrollEventThrottle={50}
                onScroll= {this.pageScrollListener}
                showsVerticalScrollIndicator = {false}
              >
                <Col data = {tableTitle} heightArr={heightArr}/>
              </ScrollView>
            </TableWraper>
          </TableWraper>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false}>
            <TableWraper>
              <Row data={tableHead} style={{flex: 1, backgroundColor: '#333'}} textStyle={styles.headText} widthArr={widthArr}/>
              <TableWraper style={{flex : 8}}>
                <ScrollView
                  ref={(instance) => this.rightScroll = instance}
                  scrollEventThrottle={50}
                  onScroll= {this.pageScrollListener}
                  showsVerticalScrollIndicator = {true}
                >
                  <Rows data={tableData} style={{height: 30}} widthArr={widthArr}/>
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
  table: { width: 360, flexDirection: 'row' , flex: 1, borderWidth : 0},
  head: { backgroundColor: '#333', height: 50},
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 }
})

export default Quotes
