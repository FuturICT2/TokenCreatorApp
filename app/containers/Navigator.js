import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import Creator  from './Creator'
import Wallet  from './Wallet'
import Account from './Account'
import Signup from './Signup'
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
    return (
      <View style={styles.root}>
        <Router style={styles.root}>
            <Tabs key="root">
              <Scene 
                key="Account" 
                component={Account} 
                title="Account" 
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