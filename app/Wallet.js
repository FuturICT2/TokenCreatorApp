import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';

export class Wallet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <RkCard>
            <View rkCardHeader>
              <Text>Header</Text>
            </View>
            <Image rkCardImg source={require('../assets/images/sea.jpg')}/>
            <View rkCardContent>
              <Text> quick brown fox jumps over the lazy dog</Text>
            </View>
            <View rkCardFooter>
              <Text>Footer</Text>
            </View>
          </RkCard>
          <RkCard>
            <View rkCardHeader>
              <Text>Header</Text>
            </View>
            <Image rkCardImg source={require('../assets/images/sea.jpg')}/>
            <View rkCardContent>
              <Text> quick brown fox jumps over the lazy dog</Text>
            </View>
            <View rkCardFooter>
              <Text>Footer</Text>
            </View>
          </RkCard>
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
