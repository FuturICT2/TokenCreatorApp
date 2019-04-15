// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { deleteToken } from '../actions/TokenActions';
import TokenList from '../components/TokenList'
import { showModal } from '../actions/modalActions'

const mapStateToProps = state => {
  return {
    tokens: state.tokens,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTokenPress: (token) => dispatch(showModal({
      modalProps: {
        modalIsOpen: true,
        title: 'Delete Token',
        message: "Are you sure you would like to delete this token?",
        action: deleteToken(token),
      },
      modalType: "confirm"
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenList)