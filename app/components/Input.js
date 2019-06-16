import React, {PureComponent} from 'react';
import { View, Text, Switch } from 'react-native';
import { RkTextInput } from 'react-native-ui-kitten';
import styles from '../styles/Styles'

export class Input extends PureComponent {

  _handleChange = (value) => {
    this.props.onChange(this.props.name, value)
  }
  _handleTouch = () => {
    if (typeof this.props.onTouch == 'function')
      this.props.onTouch(this.props.name)
  }

  render() {
    const { label, error, ...rest } = this.props;
    if (typeof this.props.value == "boolean")
      return (
        <View style={styles.root}>
          <View></View>
          <Text>{this.props.label}</Text>
          <Switch
            style={styles.row}
            placeholder={label}
            label={label}
            onValueChange={this._handleChange}
            onBlur={this._handleTouch}
            rkType='right clear'
            { ...rest } />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      );
    else
      return (
        <View style={styles.root}>
          <View></View>
          <RkTextInput
            style={styles.row}
            placeholder={label}
            label={label}
            onChangeText={this._handleChange}
            onBlur={this._handleTouch}
            rkType='right clear'
            { ...rest } />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      );
  }
}
