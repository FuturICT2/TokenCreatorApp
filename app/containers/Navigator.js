import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import Creator  from './Creator'
import Wallet  from './Wallet'
import Login from './Login'
import Profile from '../components/Profile'
import { Settings } from '../Settings'
import { Placeholder } from '../components/Placeholder'
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'
import Modal from './ModalContainer'
import { View } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => state
class Navigator extends React.Component {
  
  render(){
    Reactotron.log("navigator", this.props)
    return (
      <View style={styles.root}>
        <Router style={styles.root}>
            <Tabs key="root">
              <Scene 
                key="Profile" 
                component={Login} 
                title="Profile" 
                initial="true"
                />
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

 export default connect(mapStateToProps, null)(Navigator);