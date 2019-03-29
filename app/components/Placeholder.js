import React from 'react';
import { StyleSheet, Text } from 'react-native';

export class Placeholder extends React.Component {


  render() {

    const {children} = this.props

    return (
      <Text style={styles.text}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    margin: 5,
    flex: 1,
  },
});
