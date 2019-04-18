import ActionTypes from '../constants/ActionTypes';
import { host } from '../config/ReactotronConfig'

export function requestAuth(credentials){
  return {
    type: ActionTypes.REQUEST_AUTH,
    credentials
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

export function receiveLogout(response){
  return{
    type: ActionTypes.RECEIVE_LOGOUT,
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
      .then(
        response => response.json(),
        error => console.log('An error ocurred.;', error)
      )
      .then(json => dispatch(receiveAuth(json)))
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