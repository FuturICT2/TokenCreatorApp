import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';

export class Wallet extends React.Component {

  renderItem = (token, i) => {
    
    return  (
      <RkCard>
            <View rkCardHeader>
              <Text>{token.tokenName} ({token.tokenSymbol})</Text>
            </View>
            <Image rkCardImg source={require('../assets/images/sea.jpg')}/>
            <View rkCardContent>
              <Text> max_supply: {token.max_supply}</Text>
            </View>
            <View rkCardFooter>
              <Text>Footer</Text>
            </View>
          </RkCard>
    )
  }

  render() {
    
    const {tokens} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          {tokens.map(this.renderItem)}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  list:{
    margin: 5,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
