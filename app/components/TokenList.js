import React from 'react'
import Token from './Token'
  import {
    FlatList
  } from 'react-native';
  import {
    RkStyleSheet,
  } from 'react-native-ui-kitten';
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'


const TokenList = ({ tokens, onTokenPress }) => (
  <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={tokens}
        renderItem={({item, index}) => {
              Reactotron.display({
                name: 'Flatlist item',
                value: item,
                description: index
              })
          return (
            <Token 
                key={index} 
                onPress={ () => onTokenPress(item) }
                item={item}
            />)
        }}
  >
  </FlatList>
)

export default TokenList