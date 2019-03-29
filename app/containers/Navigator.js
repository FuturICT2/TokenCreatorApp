import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import { View } from 'react-native';

import Creator  from './Creator'
import Wallet  from './Wallet'
import { Settings } from '../Settings'
import { Placeholder } from '../components/Placeholder'
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'

console.tron = Reactotron

export default class Navigator extends React.Component {

  render(){
    Reactotron.log("navigator.js")
    return (
      <Router style={styles.root}>
        {/* <Router> */}
          <Tabs key="root">
            <Scene 
              key="Creator" 
              component={Creator} 
              title="Creator" 
              initial="true"
              />
            <Scene 
              key="Wallet" 
              component={Wallet}
              title="Wallet"
              />
            <Scene key="Obtainer" component={Placeholder} title="Obtainer"/>
            <Scene key="Market" component={Placeholder} title="Market"/>
            <Scene key="Settings" component={Settings} title="Settings"/>

          </Tabs>
        </Router>
    )
  }
}


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tokens: [] 
  //   };
  //   this.addNewToken = this.addNewToken;
  // }
  
  // async componentDidMount() {
  //   const allKeys = await AsyncStorage.getAllKeys();
  //   const tokenKeys = allKeys.filter((key) => key.includes("@TokenCreator:token-"));
  //   // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  //   let uniq = a => [...new Set(a)];
    
  //   const tokenIdentifiers = uniq(tokenKeys.map((key) => key.substring(0,28)));
  //   const tokenKeyCodes = tokenKeys.map((key) => key.substring(29));
    
  //   tokenIdentifiers.forEach( async (tokenIdentifier) => {
  //     var token = {};
  //     await tokenKeyCodes.forEach(async (key) => {
  //       const wholeKey = tokenIdentifier+":"+key;
  //       const value = await AsyncStorage.getItem(wholeKey);
  //       token[key] = value;
  //     });
  //     token["id"] = tokenIdentifier;
  //     this.setState({
  //       tokens: [...this.state.tokens, token]
  //     })
  //   })
  // }
  
  // _retrieveData = async (key) => {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     if (value !== null) {
  //       // We have data!!
  //       console.log("value is: " + value);
  //       return value;
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log("NO SUCH TOKEN");
  //     console.error(error);
  //   }
  // }

  // deleteToken = async (token) => {
  //   const allKeys = await AsyncStorage.getAllKeys();
  //   const tokenKeys = allKeys.filter((key) => key.includes(token.id));
  //   await AsyncStorage.multiRemove(tokenKeys)
  //   const {tokens} = this.state;
  //   console.tron.display({
  //     name: 'All but one',
  //     value: tokens,
  //     description: tokens
  //   })
  //   var index = tokens.indexOf(token);
  //   tokens.splice(index, 1);
  //   this.setState({
  //     tokens: tokens
  //   })

  // }


  // addNewToken = (newToken) => {
  //   const {tokens} = this.state
  //   var randomString = require('random-string');
  //   var tokenIdentifier = "token-" + randomString();
  //   try {
  //     Object.entries(newToken).forEach( async token => {
  //         await AsyncStorage.setItem('@TokenCreator:'+tokenIdentifier + ":" + token[0], token[1]);
  //     });
  //   } catch (error) {
  //       Alert.alert("Error saving data");
  //   }
  //   this.setState({
  //     tokens: [ ...tokens, newToken]
  //   })

  // }