import React from 'react'
import { Router, Scene, Tabs, Modal, ActionConst } from 'react-native-router-flux'

import { Creator } from './Creator'
import { Wallet } from './Wallet'
import { Placeholder } from './Placeholder'

export class Navigator extends React.Component {

  render(){
    return (
      <Router>
        <Tabs key="root">
          <Scene key="Creator" component={Creator} title="Creator"/>
          <Scene key="Wallet" component={Wallet} title="Wallet" initial="true"/>
          <Scene key="Obtainer" component={Placeholder} title="Obtainer"/>
          <Scene key="Market" component={Placeholder} title="Market"/>
        </Tabs>
      </Router>
    )
  }
}
