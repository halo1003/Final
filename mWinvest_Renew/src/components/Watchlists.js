import React, { Component } from 'react';
import { View,
  TextInput,
  ListView,
  StyleSheet} from 'react-native';
import { Container,
  Button,
  Thumbnail,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon } from 'native-base';
  import styles from '../styles/styles';
  const dummyData = [
    {val: 'HK Index Futures'},
    {val: 'Top 20'},
    {val: 'HK Indices'}
  ];
  export default class Watchlists extends Component {
    constructor(props){
      super(props);
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        browse_category: '',
        listViewData: dummyData,
      };
      this.setBrowseValue = this.setBrowseValue.bind(this);
      this.renderRow = this.renderRow.bind(this);
      this
    }
    setBrowseValue(value){
      console.log('set browse');
      this.setState({
        browse_category: value,
      })
    }
    deleteRow(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.state.listViewData];
      newData.splice(rowId, 1);
      this.setState({ listViewData: newData });
    }
    renderRow(rowData){
      return(
        <View style = {styles.listItem}>
          <Text>
            {rowData.val}
          </Text>
          <Icon name="arrow-forward" />
        </View>
      )
    }
    leftHiddenRow(data){
      <Button full>
        <Icon active name="information-circle" />
      </Button>
    }
    rightHiddenRow(data, secId, rowId, rowMap){
      <Button full danger
        onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
        <Icon active name="trash" />
      </Button>
    }
    render() {
      return(
        <View style = {styles.container}>
          <TextInput
            //style = {styles.}
            placeholder= 'browse category'
            onSubmitEditing = {this.setBrowseValue}
          />
          <Container>
            <Content>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={this.renderRow}
                disableRightSwipe
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle" />
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
          </Container>
        </View>
      );
    }
  }
