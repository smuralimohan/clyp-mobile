/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import QRCodeScanner from 'react-native-qrcode-scanner';
import FirebaseLogin from './src/components/login/';
 import firebase from "firebase";    

 const config = {  
  apiKey: "AIzaSyBjrTbczaa6xf-H4k7lg2zQI9Fk-91-J3U",  
  authDomain: "xyz",  
  databaseURL: "xyz",  
  projectId: "xyz",  
  storageBucket: "xyz",  
  messagingSenderId: "xyz"  
};

var firebaseConfig = {
  apiKey: "AIzaSyBjrTbczaa6xf-H4k7lg2zQI9Fk-91-J3U",
  authDomain: "centering-star-249905.firebaseapp.com",
  databaseURL: "https://centering-star-249905.firebaseio.com",
  projectId: "centering-star-249905",
  storageBucket: "centering-star-249905.appspot.com",
  messagingSenderId: "sender-id",
  appID: "1:606960811999:android:8db69fa750b330ec",
}

firebase.initializeApp(firebaseConfig);

class App extends Component {
//const App = () => {

  onSuccess = (e) => {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  render() {
    return (

      //<View style={styles.body}>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Step One</Text>
      //           <Text style={styles.sectionDescription}>
      //             Edit <Text style={styles.highlight}>App.js</Text> to change this
      //             screen and then come back to see your edits.
      //           </Text>
      //         </View>
      
      <FirebaseLogin login={user => console.warn(user)}/>
      
      // <QRCodeScanner
      //   onRead={this.onSuccess}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
      //     </Text>
      //   }
      //   bottomContent={
      //     <TouchableOpacity style={styles.buttonTouchable}>
      //       <Text style={styles.buttonText}>OK. Got it!</Text>
      //     </TouchableOpacity>
      //   }
      //   />

      

        
      // <Fragment>
      //   <StatusBar barStyle="dark-content" />

        
      //   <SafeAreaView>
      //     <ScrollView
      //       contentInsetAdjustmentBehavior="automatic"
      //       style={styles.scrollView}>
      //       <Header />
      //       {global.HermesInternal == null ? null : (
      //         <View style={styles.engine}>
      //           <Text style={styles.footer}>Engine: Hermes</Text>
      //         </View>
      //       )}
      //       <View style={styles.body}>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Step One</Text>
      //           <Text style={styles.sectionDescription}>
      //             Edit <Text style={styles.highlight}>App.js</Text> to change this
      //             screen and then come back to see your edits.
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>See Your Changes</Text>
      //           <Text style={styles.sectionDescription}>
      //             <ReloadInstructions />
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Debug</Text>
      //           <Text style={styles.sectionDescription}>
      //             <DebugInstructions />
      //           </Text>
      //         </View>
      //         <View style={styles.sectionContainer}>
      //           <Text style={styles.sectionTitle}>Learn More</Text>
      //           <Text style={styles.sectionDescription}>
      //             Read the docs to discover what to do next:
      //           </Text>
      //         </View>
      //         <LearnMoreLinks />
      //       </View>
      //     </ScrollView>
      //   </SafeAreaView>
      // </Fragment>
    );
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
 // QR Code style sheet.
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;
