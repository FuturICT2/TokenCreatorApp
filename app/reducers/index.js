import { combineReducers } from 'redux';
import tokenReducer from './TokenReducer';
import modalReducer from './ModalReducer'

const appReducer = combineReducers({
  tokens: tokenReducer,
  modal: modalReducer
});

const rootReducer = (state, action) => {
  // if (action.type === 'USER_LOGOUT') {
  // state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer