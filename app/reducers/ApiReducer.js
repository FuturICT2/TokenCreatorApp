import ActionTypes from '../constants/ActionTypes';
import Reactotron from 'reactotron-react-native';

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

function buildBalances(state, data){
  res = []
  Reactotron.log("serverTokens", state.serverTokens)
  Reactotron.log("data", data)
  data.forEach( (token) => {
    Reactotron.log("looking for id", token.TokenID)
    const found = state.serverTokens.find( 
      (serverToken) => token.TokenID == serverToken.ID)
    Reactotron.log("found", found)
    
    found.balance = token.Balance
    res.push(found)
  })
  Reactotron.log("res", res)
  return res
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
    case ActionTypes.RECEIVE_BALANCES:
        Reactotron.log('receive balance', action)
        const balances = buildBalances(state, action.response.Entries)
        return {
          ...state, 
          balances
        }
    default:
      return state
  }
}

