import ActionTypes from '../constants/ActionTypes';

export const addToken = token => ({
      type: ActionTypes.ADD_TOKEN,
      payload: token,
})

export const deleteToken = token => ({
      type: ActionTypes.DELETE_TOKEN,
      payload: token,
})