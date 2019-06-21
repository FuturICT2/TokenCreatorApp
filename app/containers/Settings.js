import React from 'react';

import { View, ScrollView, Button } from 'react-native';
import styles from '../styles/Styles'
import Reactotron from 'reactotron-react-native';


import {Input} from '../components/Input';

export default class Settings extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.settings
  }
  
  render() {
    return (
      <View style={styles.root}>
        <ScrollView >
          <Input
            label="Host"
            autoCapitalize="none"
            value={this.state.host}
            onChange={(field, text) => this.setState({...this.state, host: text})}
            name="host"
          />
          <Button
            backgroundColor="Blue"
            style={styles.button}
            onPress={ () => this.props.save(this.state) }
            title="Save changes"
            />
        </ScrollView>
      </View> 
    )
  }
}