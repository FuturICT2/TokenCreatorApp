import React from 'react'
import Token from './Token'
  import {
    FlatList
  } from 'react-native';
import styles from '../styles/Styles'


const WalletList = ({ tokens, onTokenPress }) => (
  <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={tokens}
        extraData={tokens}
        removeClippedSubviews={false}
        // Sort out keyExctractor
        keyExtractor={(item, index) => index+item.tokenName}
        renderItem={({item}) => {
          return (
          <Token 
              onPress={ () => onTokenPress(item) }
              item={item}
            />)
        }}
  >
  </FlatList>
)

export default WalletList