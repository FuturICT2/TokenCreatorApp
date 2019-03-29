import { combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';

const INITIAL_STATE = {
    tokens: [],
    walletModalVisible: false
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  const { walletModalVisible, tokens } = state;
  switch (action.type) {
    case 'ADD_TOKEN':
        Reactotron.log("Reducer: adding token");
        tokens.push(action.payload);
        // Finally, update our redux state
        const newState = { tokens };
        Reactotron.log(newState);
        return newState;

    case 'DELETE_TOKEN':
      Reactotron.log("Reducer: deleting token", tokens);
      var index = tokens.indexOf(action.payload)
      if (index !== -1) {
        tokens.splice(index, 1);
      }
      Reactotron.log("Reducer: deleted token", tokens);
      return { tokens };
  
    default:
      return state
  }
};

export default combineReducers({
  tokens: tokenReducer,
});
