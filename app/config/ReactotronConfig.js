import Reactotron, { asyncStorage } from 'reactotron-react-native'

export const host = "192.168.8.105"

Reactotron
  .configure({host: host}) // controls connection & communication settings
  .useReactNative(asyncStorage()) // add all built-in react native plugins
  .connect() // let's connect!