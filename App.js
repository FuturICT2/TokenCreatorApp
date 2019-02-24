import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppLoading,
  Font,
} from 'expo';
import App from './app/index'
import { bootstrap } from './app/config/bootstrap';

if(__DEV__) {
  console.log("configuring Reactotron")
  import('./app/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

bootstrap();


export default class Root extends React.Component {

  state = {
    isLoaded: false,
  };

  componentWillMount() {
    this.loadAssets();
  }

  loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require('./assets/fonts/fontawesome.ttf'),
      icomoon: require('./assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({ isLoaded: true });
  }

  renderLoading = () => (
    <AppLoading />
  );

  render = () => (this.state.isLoaded ? <App/> : this.renderLoading());
  
}
