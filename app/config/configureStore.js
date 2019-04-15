import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from '../reducers/index'

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
