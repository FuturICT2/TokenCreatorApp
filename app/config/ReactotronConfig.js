import Reactotron from 'reactotron-react-native'
import { store } from './configureStore'
// import { reactotronRedux } from 'reactotron-redux'

export const host = store.getState().settings.host
// export const host = "192.168.8.105"

let reactotron = Reactotron
  .configure({host: host}) // controls connection & communication settings
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
  }) // add all built-in react native plugins
  // .use(reactotronRedux()) //  <- here i am!
  .connect() // let's connect!

export default reactotron