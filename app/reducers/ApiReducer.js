import ActionTypes from '../constants/ActionTypes';
import Reactotron from 'reactotron-react-native';
import { Actions } from 'react-native-router-flux';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
}

function login(data, state){
  if (data == "Invalid login")
    return initialState
  return {
    ...state,
    isFetching: false,
    isLoggedIn: true,
    profile: data
  }
}

export default (state = initialState, action ) => {
  switch (action.type){
    case ActionTypes.RECEIVE_AUTH:
      Reactotron.log("receive login", action)
      return login(action.response, state)
    case ActionTypes.RECEIVE_LOGOUT:
      Reactotron.log('receive logout', action)
      return initialState
    case ActionTypes.RECEIVE_SIGNUP:
      Reactotron.log('receive signup', action)
      return login(action.response, state)  
    case ActionTypes.RECEIVE_TOKENS:
      Reactotron.log('receive tokens', action)
      return {...state, serverTokens: action.response} 
    default:
      return state
  }
}

