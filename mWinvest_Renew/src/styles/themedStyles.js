import Theme,{ createStyle,  createThemedComponent} from 'react-native-theming';
var themedstyles = createStyle({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '@backgroundColor',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '@textColor',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  footerItem:{
    alignItems:'center',
    flexDirection:'row',
    backgroundColor: '@backgroundColor',
    paddingHorizontal:20
  },
  genericButton: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 3,
  },
  button: {
    backgroundColor: '@buttonColor',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
  },
});
module.exports = themedstyles
