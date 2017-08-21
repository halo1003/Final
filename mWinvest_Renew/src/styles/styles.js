const React = require('react-native')
const {
  StyleSheet
} = React
const constants = {
  actionColor: '#24CE84'
};
var styles = StyleSheet.create({

  textprice: {
    borderWidth: 1,
    flexGrow: 20
  },
  order: {
    flex: 1,
    },
  order1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  grid: {
    flex: 3
  },
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    marginHorizontal: 5,
    padding: 30,
  },
  buttonSellBuy: {
    flex: 1,
    marginHorizontal: 5,
    padding: 30,
  },
  TextSymbol: {
    flex: 1,
    marginHorizontal: 5,
  },

  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    flex: 1,
    width: 100
  },
  orderButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  listItem: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  footerBtn: {
    // height: 35,
    backgroundColor: 'white',
    borderTopWidth:1,
    borderRightWidth: 1,
    borderColor: '#EEEEEE',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

module.exports = styles
module.exports.constants = constants;
