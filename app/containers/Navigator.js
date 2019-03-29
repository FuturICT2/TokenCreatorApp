import React from 'react'
import { Router, Scene, Tabs } from 'react-native-router-flux'
import Creator  from './Creator'
import Wallet  from './Wallet'
import { Settings } from '../Settings'
import { Placeholder } from '../components/Placeholder'
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'

console.tron = Reactotron

export default class Navigator extends React.Component {

  render(){
    return (
      <Router style={styles.root}>
          <Tabs key="root">
            <Scene 
              key="Creator" 
              component={Creator} 
              title="Creator" 
              initial="true"
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
    )
  }
}