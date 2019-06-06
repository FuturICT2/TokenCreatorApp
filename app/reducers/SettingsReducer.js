import Reactotron from 'reactotron-react-native';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
  host: "192.168.8.105",
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SETTINGS:
      Reactotron.log("update settings", action)
      return action.payload
    default:
      return state
  }
};

export default settingsReducer
