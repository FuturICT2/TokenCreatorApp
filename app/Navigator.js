import React from 'react'
import { Router, Scene, Tabs, Modal, ActionConst } from 'react-native-router-flux'

import { Creator } from './Creator'
import { Wallet } from './Wallet'
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
            initial="true" 
            newToken={this.addNewToken}/>
          <Scene 
            key="Wallet" 
            component={Wallet} 
            title="Wallet"
            tokens={this.state.tokens}/>
          <Scene key="Obtainer" component={Placeholder} title="Obtainer"/>
          <Scene key="Market" component={Placeholder} title="Market"/>
        </Tabs>
      </Router>
    )
  }
}
