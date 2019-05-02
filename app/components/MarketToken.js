import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
  RkCard,
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Reactotron from 'reactotron-react-native'
import styles from '../styles/Styles'


let MarketToken = ({ item }) => {
    const { gradient, icon } = {
      gradient: ['#FC354C', '#0ABFEF'],
      icon: "ethereum"
    }
    // Reactotron.log("item", item)
    return (
      <RkCard style={styles.card}>
        <View rkCardHeader>
          {/* <Avatar
            rkType='small'
            style={styles.avatar}
            img={item.user.photo}
          /> */}
          <View>
            <RkText rkType='header4'>{item.Name}</RkText>
            <RkText rkType='secondary2 hintColor'>{item.Symbol}</RkText>
          </View>
        </View>
        {/* <Image rkCardImg source={item.photo} /> */}
        <View rkCardContent>
          <RkText rkType='primary3'>{item.Description}</RkText>
        </View>
        <View rkCardFooter>
        {/* <SocialBar /> */}
      </View >
    </RkCard>
    );
  };

  
export default MarketToken