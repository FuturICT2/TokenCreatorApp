// adapted from https://github.com/akveo/kittenTricks/blob/master/app/screens/eCommerce/cards.js
import React from 'react';
import {
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  RkText,
  RkCard,
  RkButton,
  RkStyleSheet,
  RkTheme,
} from 'react-native-ui-kitten';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaleVertical } from './utils/scale'; 
import Reactotron from 'reactotron-react-native'

console.tron = Reactotron

export class Wallet extends React.Component {
  static navigationOptions = {
    title: 'Wallet',
  };

  state = {
    // data: data.getCards(),
    modalVisible: false,
  };

  getCardStyle = () => {
    return {
        gradient: ['#FC354C', '#0ABFEF'],
        icon: "ethereum",
      };
  };

  renderFooter = () => (
    <View style={styles.footer}>
      <RkButton style={styles.button} rkType='circle highlight'>
        <MaterialCommunityIcons name="plus" size={32} color="white" />
      </RkButton>
    </View>
  );

  _handleSubmit = (values, bag) => {
    // this.setState({tokenProperties: values});
    this.setModalVisible(false);
    const {deleteToken} = this.props;
    deleteToken(values);
  }

  setModalVisible = (visible, token) => {
    this.setState({ 
      modalVisible: visible,
      activeToken: token
    });
  };

  onItemPressed = (item) => {
    this.setModalVisible(true, item);
    console.tron.display({
      name: 'Token tacos',
      value: item,
      important: true,
    })
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => {
    const { gradient, icon } = this.getCardStyle();
    return (
      <RkCard rkType='credit' style={styles.card} key={item.id}>
        <TouchableOpacity
          delayPressIn={70}
          activeOpacity={0.8}
          onPress={() => this.onItemPressed(item)}>
          <LinearGradient
            colors={gradient}
            start={{ x: 0.0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.background}>
            <View rkCardHeader>
              <RkText rkType='header4 inverseColor'>max. supply: {item.max_supply}</RkText>
              <MaterialCommunityIcons name={icon} size={40} color="white" />
            </View>
            <View rkCardContent>
              <View style={styles.cardNoContainer}>
                <RkText style={styles.cardNo} rkType='header2 inverseColor'>{item.tokenName}</RkText>
              </View>
              <RkText style={styles.date} rkType='header6 inverseColor'>{item.date}</RkText>
            </View>
            <View rkCardFooter>
              <View>
                <RkText rkType='header4 inverseColor'>{item.tokenSymbol.toUpperCase()}</RkText>
                <RkText rkType='header6 inverseColor'>local</RkText>
              </View>
              <RkText
                rkType='header2 inverseColor'>{item.tokenSymbol.toUpperCase()} 1.4002 </RkText>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </RkCard>
    );
  };

  render() { 

    const {tokens} = this.props;
    console.tron.display({
        name: 'EC tokens',
        value: tokens,
        important: true,
      })
    return (
        <View style={styles.root} deleteToken={this.deleteToken}>
        <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={this.renderFooter}
            keyExtractor={this.extractItemKey}
            data={tokens}
            renderItem={this.renderItem}
        />
        <Modal
            animationType="fade"
            transparent
            onRequestClose={() => this.setModalVisible(false)}
            visible={this.state.modalVisible}>
            <View style={styles.popupOverlay}>
            <View style={styles.popup}>
                <View style={styles.popupContent}>
                <RkText style={styles.popupHeader} rkType='header4'>Delete wallet?</RkText>
                </View>
                <View style={styles.popupButtons}>
                <RkButton
                    onPress={() => this.setModalVisible(false)}
                    style={styles.popupButton}
                    rkType='clear'>
                    <RkText rkType='light'>CANCEL</RkText>
                </RkButton>
                <View style={styles.separator} />
                <RkButton
                    onPress={() => this._handleSubmit(this.state.activeToken)}
                    style={styles.popupButton}
                    rkType='clear'>
                    <RkText>OK</RkText>
                </RkButton>
                </View>
            </View>
            </View>
        </Modal>
        </View>
    )}
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
  },
  list: {
    marginHorizontal: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 10,
  },
  background: {
    borderRadius: 7,
  },
  cardNoContainer: {
    flexDirection: 'row',
  },
  cardNo: {
    marginHorizontal: 8,
  },
  cardPlaceholder: {
    paddingTop: 4,
  },
  date: {
    marginTop: scaleVertical(20),
  },
  footer: {
    marginTop: 8,
    marginBottom: scaleVertical(16),
    alignItems: 'center',
  },
  button: {
    height: 56,
    width: 56,
  },
  popup: {
    backgroundColor: theme.colors.screen.base,
    marginTop: scaleVertical(70),
    marginHorizontal: 37,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: theme.colors.screen.overlay,
    flex: 1,
  },
  popupContent: {
    alignItems: 'center',
    margin: 16,
  },
  popupHeader: {
    marginBottom: scaleVertical(45),
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: theme.colors.border.base,
  },
  popupButton: {
    flex: 1,
    marginVertical: 16,
  },
  separator: {
    backgroundColor: theme.colors.border.base,
    width: 1,
  },
}));