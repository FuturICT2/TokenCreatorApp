import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from '../reducers/index'

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// We need thunk for async dispatch
// import Reactotron from './ReactotronConfig'
// export let store = createStore(
//   persistedReducer,
//   compose(
//     applyMiddleware(
//       thunkMiddleware
//     ),
//     Reactotron.createEnhancer()
//   ) 
// )

export let store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware
  ) 
)
export let persistor = persistStore(store)
