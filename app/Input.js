import React, {PureComponent} from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { RkTextInput, RkStyleSheet } from 'react-native-ui-kitten';

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

  const styles = RkStyleSheet.create(theme => ({
    root: {
      backgroundColor: theme.colors.screen.base,
      width: '90%',
      alignSelf: 'center'
    },
    header: {
      backgroundColor: theme.colors.screen.neutral,
      paddingVertical: 25,
    },
    section: {
      marginVertical: 25,
    },
    heading: {
      paddingBottom: 12.5,
    },
    row: {
      flexDirection: 'row',
      paddingHorizontal: 17.5,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border.base,
      alignItems: 'center',
    },
    button: {
      marginHorizontal: 16,
      marginBottom: 32,
    },
  }));
