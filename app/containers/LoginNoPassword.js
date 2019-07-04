import { Actions } from 'react-native-router-flux';
import React from 'react';
import {
  View,
  Image,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
} from 'react-native-ui-kitten';
import styles from '../styles/Styles'
import Reactotron from 'reactotron-react-native';
import {KeyboardAvoidingView} from 'react-native';


export default class Login extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.screen}
        behavior="padding" enabled>
        <View style={styles.header}>
          <Image style={styles.image} source={ require('../../assets/images/futurict2.png') } />  
          <RkText rkType='light h1'>Fin4</RkText>
          <RkText rkType='logo h0'>FuturICT2</RkText>
        </View>
        <View style={styles.content}>
          <View>
            <RkTextInput 
              onChangeText={(text) => this.setState({name: text})}
              rkType='rounded' 
              placeholder='Name' />
          </View>
          <View style={styles.textRow}>
            <RkButton
              style={styles.save}
              rkType='large'
              onPress={ () => this.props.onLoginButtonPressed(this.state)}
            >Login</RkButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}