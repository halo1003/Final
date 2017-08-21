import { createTheme } from 'react-native-theming'
module.exports =
[
  createTheme({
    backgroundColor: 'white',
    textColor: 'black',
    buttonColor: 'blue',
    buttonText: 'white',
    //icon: require('./icons/default.png'),
    statusBar: 'dark-content',
  }, 'Light'),
  createTheme({
    backgroundColor: 'black',
    textColor: 'white',
    buttonColor: 'yellow',
    buttonText: 'black',
    //icon: require('./icons/colorful.png'),
    statusBar: 'light-content',
  }, 'Dark'),
];
