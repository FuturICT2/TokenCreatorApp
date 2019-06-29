import ActionTypes from '../constants/ActionTypes';
import Reactotron from 'reactotron-react-native';
import { showModal } from '../actions/modalActions'
import { store } from '../config/configureStore'
// import { reactotronRedux } from 'reactotron-redux'

getHost = () => store.getState().settings.host

export function requestAuth(credentials){
  return {
    type: ActionTypes.REQUEST_AUTH,
    credentials
  }
}

export function receiveLogout(response){
  return{
    type: ActionTypes.RECEIVE_LOGOUT,
    response,
    receivedAt: Date.now()
  }
}

export function requestLogout(){
  return {
    type: ActionTypes.REQUEST_LOGOUT,
    receivedAt: Date.now()
  }
}

export function receiveAuth(response){
  return{
    type: ActionTypes.RECEIVE_AUTH,
    response,
    receivedAt: Date.now()
  }
}

export function requestSignup(){
  return {
    type: ActionTypes.REQUEST_SIGNUP,
  }
}

export function receiveSignup(response){
  return{
    type: ActionTypes.RECEIVE_SIGNUP,
    response,
    receivedAt: Date.now()
  }
}

export function receiveTokens(response){
  return{
    type: ActionTypes.RECEIVE_TOKENS,
    response,
    receivedAt: Date.now()
  }
}

export function receiveBalances(response){
  return{
    type: ActionTypes.RECEIVE_BALANCES,
    response,
    receivedAt: Date.now()
  }
}

export function receiveCreateTokens(response){
  return{
    type: ActionTypes.RECEIVE_CREATE_TOKENS,
    response,
    receivedAt: Date.now()
  }
}

export function fetchAuth(credentials){

  return function(dispatch) {
    dispatch(requestAuth(credentials))
    let url = 'http://' + getHost() + ':8181/wapi/login'
    Reactotron.log("url", url, credentials)
    return fetch( url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },  
        credentials: 'same-origin',
        body: JSON.stringify(credentials),
      })
      .then(response => {
        handleResponse(response, dispatch, receiveAuth)
      })
  }
}

export function fetchLogout(){

  return function(dispatch) {
    dispatch(requestLogout())
    return fetch( 'http://' + getHost() + ':8181/wapi/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })
      .then(
        response => response.json(),
        error => console.log('An error ocurred.;', error)
      )
      .then(json => dispatch(receiveLogout()))
  }
}

export function fetchSignup(values){

  delete values.confirmPassword
  values = {...values, 	
    agreeToTerms: true,
    isFastSignup: false,}

  return function(dispatch) {
    dispatch(requestSignup())
    return fetch( 'http://' + getHost() + ':8181/wapi/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then( response => {
        handleResponse(response, dispatch, receiveSignup) })
  }
}

function handleResponse( response, dispatch, callback){
  Reactotron.log("response receieved")
  new Promise( (resolve) => {
    if( !response.ok ){
      throw response
    }
    resolve( response.json())
  })
  .then(json => dispatch( callback(json)))
  .catch(error => showError(error, dispatch))
}

function showError( error, dispatch ){
  error.text().then( errorMsg => {
    dispatch(showModal({
      modalProps: {
        title: 'Error',
        message: errorMsg,
      }, 
      modalType: 'info'
    }))
  })
}



export function fetchTokens(){
  return function(dispatch) {
    // dispatch(requestSignup())
    return fetch( 'http://' + getHost() + ':8181/wapi/assets', {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
        credentials: 'same-origin',
      })
      .then( response => handleResponse(response, dispatch, receiveTokens) )
    }
}

export function fetchBalances(){

  return function(dispatch) {
    // dispatch(requestSignup())
    return fetch( 'http://' + getHost() + ':8181/wapi/balances', {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
        credentials: 'same-origin',
      })
      .then( response => handleResponse(response, dispatch, receiveBalances) )
    }
}

export function fetchCreateToken(token){
  let serverToken = {...token}
  if (!token.isCapped)
    serverToken.cap = 0
  serverToken.decimals = parseInt(token.decimals)
  serverToken.cap = parseInt(token.cap)

  return function(dispatch) {
    // dispatch(requestSignup())
    return fetch( 'http://' + getHost() + ':8181/wapi/ap-assets', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(serverToken),
      })
      .then( response => handleResponse(response, dispatch, receiveCreateTokens) )
    }
}
