import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import Creator  from './Creator'
import Wallet  from './Wallet'
import Login from './Login'
import Signup from './Signup'
import { Settings } from '../Settings'
import { Placeholder } from '../components/Placeholder'
import Profile from '../components/Profile';
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'
import Modal from './ModalContainer'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { fetchAuth, fetchLogout } from '../actions/apiActions'

const mapDispatchToProps = dispatch => ({
  onLoginButtonPressed: (values) => {
    dispatch(fetchAuth(values))
  },
  onLogoutButtonPressed: () => {
    dispatch(fetchLogout())
  }
 })

const mapStateToProps = state => state
class Navigator extends React.Component {
  
  render(){
    return (
      <View style={styles.root}>
        <Router style={styles.root}>
            <Tabs key="root">
              <Scene key="Account">
                <Scene 
                  onLoginButtonPressed={ (values) => this.props.onLoginButtonPressed(values)}
                  user={ this.props.user }
                  key='Login'
                  on={this.props.user.isLoggedIn}
                  component={Login} 
                  title='Login'/>
                <Scene 
                  key='Signup'
                  component={Signup} 
                  title='Signup'/>
                <Scene 
                  key='Profile' 
                  component={Profile} 
                  user={ this.props.user } 
                  logout={() => this.props.onLogoutButtonPressed()}
                  initial={this.props.user.isLoggedIn}
                  title='Profile'/>
              </Scene>
              <Scene 
                key="Creator" 
                component={Creator} 
                title="Creator" 
                />
              <Scene 
                key="Wallet" 
                component={Wallet}
                title="Wallet"
                />
              <Scene key="Obtainer" component={Placeholder} title="Obtainer"/>
              <Scene key="Market" component={Placeholder} title="Market"/>
              <Scene key="Settings" component={Settings} title="Settings"/>
            </Tabs>
          </Router>
          <Modal></Modal>
        </View>
    )
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(Navigator);