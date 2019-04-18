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
import Signup from './Signup'
import Login from './Login'
import Reactotron from 'reactotron-react-native';
import { Router, Scene, Stack } from 'react-native-router-flux'


const mapDispatchToProps = dispatch => ({
  onLoginButtonPressed: (values) => {
    dispatch(fetchAuth(values))
  },
  onLogoutButtonPressed: () => {
    dispatch(fetchLogout())
  }
 })

const mapStateToProps = state => state.user

class Account extends React.Component {

  loginPage = () => (
      <Stack key='account'>
        <Scene 
          onLoginButtonPressed={ (values) => this.props.onLoginButtonPressed(values)}
          key='Login' 
          component={Login} 
          title='Login'/>
        <Scene key='Signup' component={Signup} title='Signup'/>
      </Stack>
  );

  render = () => {
    Reactotron.log("login render", this.props)
    if( this.props.isLoggedIn === true )
      return <Profile user={ this.props } logout={() => this.props.onLogoutButtonPressed()}/>
    else
      return this.loginPage()
  }
}

Account = connect( mapStateToProps, mapDispatchToProps )(Account);
export default Account