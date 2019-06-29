// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import { connect } from 'react-redux';
import WalletList from '../components/WalletList'
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
)(WalletList)