import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-native';
import confirmModal from '../components/Modals/ConfirmModal';
import infoModal from '../components/Modals/InfoModal';
import Reactotron from 'reactotron-react-native'
import { hideModal } from '../actions/modalActions'


const MODAL_TYPES = {
  'confirm': confirmModal,
  'info': infoModal,
}

const mapStateToProps = state => state.modal

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType]
    return (
      <Modal
      animationType="fade"
      transparent
      onRequestClose={this.props.hideModal}
      visible={this.props.modalProps.modalIsOpen}>
        <SpecifiedModal
          closeModal={this.props.hideModal}
          message={this.props.modalProps.message}
          title={this.props.modalProps.title}
          action={this.props.modalProps.action}
          onAction={this.props.onAction}
          />
      </Modal>
    )
  }
}
const mapDispatchToProps = dispatch => ({ 
  hideModal: () => dispatch(hideModal()),
  onAction: (action) => {
    dispatch(hideModal())
    dispatch(action)
  }
 })

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)