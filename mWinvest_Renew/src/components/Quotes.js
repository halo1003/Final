import React, { Component } from "react";
import { Content,Container } from 'native-base';
import { View, StyleSheet, ScrollView } from "react-native";
import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Quotes extends Component {
  render() {
    const tableHead = ['Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9', 'Head10','Head11','KIKI'];
    const tableTitle = ['Title', 'Title2', 'Tilte3', 'Title4', 'Title5','KIKI','Title', 'Title2', 'Tilte3', 'Title4', 'Title5','kiki','Title', 'Title2', 'Tilte3', 'Title4', 'Title5','KIKI'];
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

    return (
      <Container>
        <View style={{flexDirection:'row',flex:1}}>
              <Cell data="Head" style={styles.head} textStyle={styles.headText}/>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
        </View>
      <Content>
        <Table style={styles.table}>
          {/* Left wraper */}
          <TableWraper style={{width: 80}}>
            <Cell data="Head" style={styles.head} textStyle={styles.headText}/>
            {
              tableTitle.map((title, i) => (
                <Cell key={i} data={title} height={28} style={[styles.title, i%2 && {backgroundColor: '#DFF5F2'}]} textStyle={styles.titleText}/>
              ))
            }
          </TableWraper>

          {/* Right scrollview wraper */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* If parent element is not table element, you should add the type of borderstyle. */}
            <TableWraper borderStyle={{borderWidth: 1,borderColor: '#000',}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.headText} widthArr={widthArr}/>
              {
                tableData.map((data, i) => (
                  <Row key={i} data={data} style={[styles.list, i%2 && {backgroundColor: '#DFF5F2'}]} widthArr={widthArr} textStyle={styles.listText}/>
                ))
              }
            </TableWraper>
          </ScrollView>
        </Table>
      </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  table: { width: 360, flexDirection: 'row' },
  head: { backgroundColor: '#333', height: 50 },
  headText: { color: '#fff', textAlign: 'center' },
  titleText: { marginLeft: 6 },
  list: { height: 28, backgroundColor: '#f0f0f0' },
  listText: { textAlign: 'right', marginRight: 6 }
})

export default Quotes
