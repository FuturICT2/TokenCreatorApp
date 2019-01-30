import React from 'react';
import { StyleSheet, View } from 'react-native';

import {Creator} from './Creator'
import {Navigator} from './Navigator'

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
