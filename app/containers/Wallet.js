// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { deleteToken } from '../actions/TokenActions';
import TokenList from '../components/WalletList'
import { showModal } from '../actions/modalActions'
import { fetchBalances, fetchTokens } from '../actions/apiActions'

const mapStateToProps = state => {
  return {
    tokens: state.user.balances,
    refreshing: false
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refresh: async () => {
      await dispatch(fetchTokens())
      dispatch(fetchBalances()) 
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenList)