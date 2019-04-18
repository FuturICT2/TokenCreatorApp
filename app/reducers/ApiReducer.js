import ActionTypes from '../constants/ActionTypes';
import Reactotron from 'reactotron-react-native';
import { Actions } from 'react-native-router-flux';

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  session: '',
  data: {}
}

function login(data){
  if (data == "Invalid login")
    return initialState
  const newState = {
    isFetching: false,
    isLoggedIn: true,
    profile: data
  }
  return newState
}

export default (state = initialState, action ) => {
  switch (action.type){
    case ActionTypes.RECEIVE_AUTH:
      Reactotron.log("api reducer", action)
      return login(action.response)
    case ActionTypes.RECEIVE_LOGOUT:
      Reactotron.log('api reducer', action)
      return initialState
    default:
      return state
  }
}

