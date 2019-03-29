import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './containers/Navigator'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './config/configureStore'
import Reactotron from 'reactotron-react-native'


export default class App extends React.Component {
  render() {
    Reactotron.log("store, persistor: ", store, persistor)
    return (
      <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }}>
              <Navigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

