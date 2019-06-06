import { combineReducers } from 'redux'
import tokenReducer from './TokenReducer'
import modalReducer from './ModalReducer'
import apiReducer from './ApiReducer'
import settingsReducer from './SettingsReducer'

const appReducer = combineReducers({
  tokens: tokenReducer,
  modal: modalReducer,
  user: apiReducer,
  settings: settingsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  // state = undefined

  return appReducer(state, action)
}

export default rootReducer