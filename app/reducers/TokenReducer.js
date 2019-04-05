import { combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';

const INITIAL_STATE = {
    tokens: []
};

const tokenReducer = (state = [], action) => {
  Reactotron.log("reducer", state)
  const tokens = [...state];
  switch (action.type) {
    case 'ADD_TOKEN':
        Reactotron.log("Reducer: adding token");
        tokens.push(action.payload);
        // Finally, update our redux state
        Reactotron.log(state);
        return tokens;

    case 'DELETE_TOKEN':
      Reactotron.log("Reducer: deleting token", tokens);
      var index = tokens.indexOf(action.payload)
      if (index !== -1) {
        tokens.splice(index, 1);
      }
      Reactotron.log("Reducer: deleted token", tokens);
      return tokens ;
  
    default:
      return state
  }
};

const appReducer = combineReducers({
  tokens: tokenReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  Reactotron.log("rootReducer", state)
  return appReducer(state, action)
}

export default rootReducer