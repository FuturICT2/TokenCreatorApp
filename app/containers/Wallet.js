// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import {
  RkStyleSheet,
} from 'react-native-ui-kitten';
import { scaleVertical } from '../utils/scale'; 
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { deleteToken } from '../actions/TokenActions';
import TokenList from '../components/TokenList'

const mapStateToProps = state => {
  return {
    tokens: state.tokens.tokens,
    // modalVisible: getModalVisible(state.modalVisible)
  }
}

const mapDispatchToProps = dispatch => {
  Reactotron.log("Wallet.js - mapDispatchToProps")
  return {
    onTokenPress: token => dispatch(deleteToken(token))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenList)