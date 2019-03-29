import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tokenReducer from './reducers/TokenReducer';

import Navigator from './containers/Navigator'
import styles from './styles/Styles'
import Reactotron from 'reactotron-react-native';

const store = createStore(tokenReducer);

export default class App extends React.Component {
  render() {
    Reactotron.log("index.js")
    return (
      <Provider store={ store }>
        <View style={{ flex: 1 }}>
            <Navigator />
        </View>
      </Provider>
    );
  }
}

