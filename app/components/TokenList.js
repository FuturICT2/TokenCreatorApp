import React from 'react'
import MarketToken from './MarketToken'
  import {
    FlatList,
    RefreshControl
  } from 'react-native';
import styles from '../styles/Styles'
import Reactotron from 'reactotron-react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    user: state.user,
    refreshing: false,
})}
class TokenList extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return(
  <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={this.props.user.serverTokens}
        // extraData={this.props}
        removeClippedSubviews={false}
        // Sort out keyExctractor
        keyExtractor={(item, index) => index+item.tokenName}
        refreshing={this.props.refreshing }
        onRefresh={ () => this.props.refresh() }
        renderItem={({item}) => {
          return (
          <MarketToken
              item={item}
            />)
        }}
  >
  </FlatList>
    )}
}

export default connect(mapStateToProps, null)(TokenList);

// export default TokenList