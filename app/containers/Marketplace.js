// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { deleteToken } from '../actions/TokenActions';
import TokenList from '../components/TokenList'
import { fetchTokens } from '../actions/apiActions'

const mapStateToProps = state => {
  return {
    tokens: state.user.serverTokens,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: () => dispatch(fetchTokens()) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenList)