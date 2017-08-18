import React, { Component } from 'react';
import { View,
  TextInput,
  ListView,
  StyleSheet,
  SectionList,
  Image} from 'react-native';
import { Container,
  Button,
  SwipeRow,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon } from 'native-base';
  import styles from '../styles/styles';
  const CustomData = [
    {val: 'HK Index Futures'},
    {val: 'US Stocks'},
  ];
  const BrowseData = [
    {val: 'Top 20'},
    {val: 'HK Index'},
    {val: 'A+H'}
  ];

  export default class Watchlists extends Component {
    constructor(props){
      super(props);
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        listViewData: CustomData,
        listViewBrowseData: BrowseData
      };
      this.renderRow = this.renderRow.bind(this);
    }
    deleteRow(secId,rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.state.listViewData];
      const newData2 = [...this.state.listViewBrowseData];
      newData.splice(rowId, 1);
      newData2.splice(rowId, 1);
      this.setState({ listViewData: newData });
      this.setState({ listViewBrowseData: newData2 });
    }
    renderRow(rowData){
      return(
        <View style = {styles.listItem}>
          <Text style={{paddingLeft:5}}>
            {rowData.val}
          </Text>
          <Image style={{height:30,width:30,margin:5}}
                 source = {require('../images/next.png')}/>
        </View>
      )
    }
    rightHiddenRow(data, secId, rowId, rowMap){
      <Button full danger
        onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
        <Text>Delete</Text>
      </Button>
    }
    render() {
      return(
        <Content scrollEnabled={false}>
            <View style={{flex:1,paddingBottom:5}}>
              <View style={{paddingBottom:10,paddingTop:5,borderBottomWidth:0.5,borderBottomColor:'#f2f2f2'}}>
              <Text style={{alignItems:'center',paddingLeft:5,color:'#999999'}}>Your Custom Watchlists</Text>
              </View>

              <List scrollEnabled={false}
                  dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                  renderRow={this.renderRow}
                  disableRightSwipe
                  renderLeftHiddenRow={data =>
                    <View></View>}
                  renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                      <Text>Delete</Text>
                    </Button>}
                  rightOpenValue={-85}
              />

              <View style={{paddingBottom:10,paddingTop:5,borderBottomWidth:0.5,borderBottomColor:'#f2f2f2'}}>
              <Text style={{alignItems:'center',paddingLeft:5,color:'#999999',}}>Browse Catrgories</Text>
              </View>
              <List scrollEnabled={false}
                  dataSource={this.ds.cloneWithRows(this.state.listViewBrowseData)}
                  renderRow={this.renderRow}
                  disableRightSwipe
                  renderLeftHiddenRow={data =>
                    <View></View>}
                  renderRightHiddenRow={(data, secId, rowId2, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(secId, rowId2, rowMap)}>
                      <Text>Delete</Text>
                    </Button>}
                  rightOpenValue={-85}
              />
              </View>
        </Content>
      );
    }
  }
