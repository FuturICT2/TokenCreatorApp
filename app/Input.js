import React, {PureComponent} from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';

export class Input extends PureComponent {

  _handleChange = (value) => {
    this.props.onChange(this.props.name, value)
  }
  _handleTouch = () => {
    this.props.onTouch(this.props.name)
  }

  render() {
    const { label, error, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <RkTextInput
          placeholder={label}
          label={label}
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          { ...rest } />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '90%',
    alignSelf: 'center'
  },
  error: {
    color: 'red'
  }
})
