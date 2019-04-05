import { combineReducers } from 'redux';
import tokenReducer from './TokenReducer';

const appReducer = combineReducers({
  tokens: tokenReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === 'USER_LOGOUT') {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer