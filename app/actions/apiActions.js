import ActionTypes from '../constants/ActionTypes';
import { host } from '../config/ReactotronConfig'
import Reactotron from 'reactotron-react-native';
import { showModal } from '../actions/modalActions'

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



export function fetchAuth(credentials){

  return function(dispatch) {
    dispatch(requestAuth(credentials))

    return fetch( 'http://' + host + ':8181/wapi/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(credentials),
      })
      .then(response => handleResponse(response, dispatch, receiveAuth))
  }
}

export function fetchLogout(){

  return function(dispatch) {
    dispatch(requestLogout())

    return fetch( 'http://' + host + ':8181/wapi/logout', {
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
    return fetch( 'http://' + host + ':8181/wapi/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then( response => handleResponse(response, dispatch, receiveSignup) )
  }
}

function handleResponse( response, dispatch, callback){
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