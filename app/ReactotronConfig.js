import Reactotron, { asyncStorage } from 'reactotron-react-native'

Reactotron
  .configure({host: "192.168.1.5"}) // controls connection & communication settings
  .useReactNative(asyncStorage()) // add all built-in react native plugins
  .connect() // let's connect!