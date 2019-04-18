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
import { connect } from 'react-redux'
import { fetchAuth, fetchLogout } from '../actions/apiActions'
import Profile from '../components/Profile'
import Reactotron from 'reactotron-react-native';


const mapDispatchToProps = dispatch => ({
  onLoginButtonPressed: (values) => {
    dispatch(fetchAuth(values))
  },
  onLogoutButtonPressed: () => {
    dispatch(fetchLogout())
  }
 })

const mapStateToProps = state => state.user

class Login extends React.Component {
  onSignUpButtonPressed = () => {
    // this.props.navigation.navigate('SignUp');
  };

  getThemeImageSource = (theme) => (
      require('../../assets/images/logo.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  loginPage = () => (
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={styles.header}>
        {this.renderImage()}
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
            onPress={() => this.props.onLoginButtonPressed(this.state)}
          >Login</RkButton>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Don’t have an account?</RkText>
            <RkButton rkType='clear' onPress={this.onSignUpButtonPressed}>
              <RkText rkType='header6'>Sign up now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  );

  render = () => {
    Reactotron.log("login render", this.props)
    if( this.props.isLoggedIn === true )
      return <Profile user={ this.props } logout={() => this.props.onLogoutButtonPressed()}/>
    else
      return this.loginPage()
  }
}

Login = connect( mapStateToProps, mapDispatchToProps )(Login);
export default Login