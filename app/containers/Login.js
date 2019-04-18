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


export default class Login extends React.Component {

  constructor(props) {
    super(props);
    Reactotron.log("constructor", this.props)
  }
  
  render = () => (
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={styles.header}>
        <Image style={styles.image} source={ require('../../assets/images/logo.png') } />  
        <RkText rkType='light h1'>Fin4</RkText>
        <RkText rkType='logo h0'>FuturICT2</RkText>
      </View>
      <View style={styles.content}>
        <View>
          <RkTextInput 
            onChangeText={(text) => this.setState({email: text})}
            rkType='rounded' 
            placeholder='Email' />
          <RkTextInput
            onChangeText={(text) => this.setState({password: text})}
            rkType='rounded' 
            placeholder='Password' 
            secureTextEntry />
        </View>
        <View style={styles.textRow}>
          <RkButton
            style={styles.save}
            rkType='large'
            onPress={ () => this.props.onLoginButtonPressed(this.state)}
          >Login</RkButton>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Don’t have an account?</RkText>
            <RkButton rkType='clear' onPress={Actions.Signup}>
              <RkText rkType='header6'>Sign up now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  )
}