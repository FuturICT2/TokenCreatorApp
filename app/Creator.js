import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

export class Creator extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <RkTextInput RkType="form" label='TokenName' placeholer='Bitcoin'></RkTextInput>
          <RkTextInput RkType="form" label='Symbol' placeholer='BTC'></RkTextInput>
          <RkTextInput RkType="form" label='MaximumSupply' placeholer='1000'></RkTextInput>
          <RkTextInput RkType="form" label='Decimals' placeholer='2'></RkTextInput>
          <RkTextInput RkType="form" label='GenesisSupply' placeholer='10'></RkTextInput>
        </ScrollView>
        <View style={styles.footer}>
          <RkButton>Save</RkButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list:{
    margin: 5,
    flex: 1,
  },
  footer:{
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
