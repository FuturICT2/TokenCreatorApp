export const addToken = token => ({
      type: 'ADD_TOKEN',
      payload: token,
})

export const deleteToken = token => ({
      type: 'DELETE_TOKEN',
      payload: token,
})

export const toggleModal = () => ({
      type: 'TOGGLE_MODAL',
})