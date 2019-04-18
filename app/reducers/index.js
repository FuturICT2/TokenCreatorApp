import { combineReducers } from 'redux'
import tokenReducer from './TokenReducer'
import modalReducer from './ModalReducer'
import apiReducer from './ApiReducer'

const appReducer = combineReducers({
  tokens: tokenReducer,
  modal: modalReducer,
  user: apiReducer
});

const rootReducer = (state, action) => {
  // if (action.type === 'USER_LOGOUT') {
  // state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer