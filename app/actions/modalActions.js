import ActionTypes from '../constants/ActionTypes';

export const showModal = ({ modalProps, modalType }) => ({
  type: ActionTypes.SHOW_MODAL,
  modalProps,
  modalType
})

export const hideModal = () => ({
  type: ActionTypes.HIDE_MODAL
})