import React from 'react';
import { StyleSheet, View } from 'react-native';

import App from './app/index'

if(__DEV__) {
  console.log("configuring Reactotron")
  import('./app/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default class Root extends React.Component {
  render() {
    return (
      <App/>
    )
  }
}
