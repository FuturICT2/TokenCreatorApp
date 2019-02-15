import React from 'react'
import { Router, Scene, Tabs, Modal, ActionConst } from 'react-native-router-flux'

import { Creator } from './Creator'
import { Wallet } from './Wallet'
import { Settings } from './Settings'
import { Placeholder } from './Placeholder'

export class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tokens: [] 
    };
    this.addNewToken = this.addNewToken;
  }

  addNewToken = (newToken) => {
    const {tokens} = this.state

    this.setState({
      tokens: [ ...tokens, newToken]
    })

  }

  render(){
    return (
      <Router>
        <Tabs key="root">
          <Scene 
            key="Creator" 
            component={Creator} 
            title="Creator" 
            newToken={this.addNewToken}/>
          <Scene 
            key="Wallet" 
            component={Wallet} 
            title="Wallet"
            tokens={this.state.tokens}/>
          <Scene key="Obtainer" component={Placeholder} title="Obtainer"/>
          <Scene key="Market" component={Placeholder} title="Market"/>
          <Scene key="Settings" component={Settings} title="Settings" initial="true"/>

        </Tabs>
      </Router>
    )
  }
}
