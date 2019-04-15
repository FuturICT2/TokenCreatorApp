import ActionTypes from '../constants/ActionTypes';
import Reactotron from 'reactotron-react-native';

const initialState = {
  modalType: null,
  modalProps: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: {...action.modalProps, modalIsOpen: true},
        modalType: action.modalType
      }
    case ActionTypes.HIDE_MODAL:
      return initialState
    default:
      return state
  }
}