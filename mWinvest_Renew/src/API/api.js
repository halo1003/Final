import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCijhx97Nm3ZTwuAMcB9c-PD0-pq-qh_18',
  authDomain: 'databasewinvest.firebaseapp.com',
  databaseURL: 'https://databasewinvest.firebaseio.com',
  storageBucket: 'databasewinvest.appspot.com',
};

firebase.initializeApp(config);

export default firebase;
