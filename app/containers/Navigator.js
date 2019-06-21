import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import Creator  from './Creator'
import Wallet  from './Wallet'
import Login from './Login'
import Signup from './Signup'
import Settings from './Settings'
import { Placeholder } from '../components/Placeholder'
import Profile from '../components/Profile';
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'
import Modal from './ModalContainer'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { fetchAuth, fetchLogout } from '../actions/apiActions'
import { updateSettings } from '../actions/settingsActions'
import Marketplace from './Marketplace'
import Icon from 'react-native-vector-icons/Ionicons';


const mapDispatchToProps = dispatch => ({
  onLoginButtonPressed: (values) => {
    dispatch(fetchAuth(values))
  },
  onLogoutButtonPressed: () => {
    dispatch(fetchLogout())
  },
  onSaveSettingsButtonPressed: (values) => {
    Reactotron.log("nav values", values)
    dispatch(updateSettings(values))
  }
 })

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
    isLoggedIn: state.user.isLoggedIn,
    settings: state.settings
  }
}
class Navigator extends React.Component {
  
  // be more specific about the error you're catching
  componentDidCatch(error, info) {
    // Display fallback UI
    Reactotron.log("ERROR", error, info, this.state)
    this.props.onLogoutButtonPressed()
  }

  render(){
    Reactotron.log("navigator props:", this.props)
    return (
      <View style={styles.root}>
        <Router style={styles.root}>
            <Tabs key="root">
              <Scene key="Account" title="Account" icon={TabIcon}>
                <Scene 
                  onLoginButtonPressed={ (values) => this.props.onLoginButtonPressed(values)}
                  key='Login'
                  on={this.props.profile}
                  component={Login} 
                  title='Login'/>
                <Scene 
                  key='Signup'
                  component={Signup} 
                  title='Signup'/>
                <Scene 
                  key='Profile' 
                  component={Profile} 
                  profile={ this.props.profile } 
                  logout={() => this.props.onLogoutButtonPressed()}
                  initial={this.props.isLoggedIn}
                  title='Profile'/>
              </Scene>
              <Scene 
                key="Creator" 
                component={Creator} 
                title="Creator" 
                icon={TabIcon}
                />
              <Scene 
                key="Wallet" 
                component={Wallet}
                icon={TabIcon}
                title="Wallet"
                />
              {/* <Scene key="Obtainer" component={Placeholder} title="Obtainer"/> */}
              <Scene key="Market" 
                component={Marketplace} 
                icon={TabIcon}
                title="Market"/>
              <Scene 
                key="Settings" 
                component={Settings} 
                settings={this.props.settings}
                icon={TabIcon}
                save={ (values)  => this.props.onSaveSettingsButtonPressed(values)}
                title="Settings"/>
            </Tabs>
          </Router>
          <Modal></Modal>
        </View>
    )
  }
}

const TabIcon = ({ title, focused }) => {
  let icon;
  switch(title){
    case 'Account':
      icon = "ios-contact"
      break
    case 'Creator':
      icon = "ios-rocket"
      break
    case 'Wallet':
      icon = "ios-wallet"
      break
    case 'Market':
      icon = "ios-planet"
      break
    // case 'Settings':
    //     icon = "cog"
    //     break
    case 'Settings':
      icon = "ios-cog"
      break
                                                 
  }
  
  return (
    <Icon
    name={icon}
    color={focused ? '#0A84FF':'#AAA'}
    size={25}
  />
  );
}


 export default connect(mapStateToProps, mapDispatchToProps)(Navigator);