import { RkStyleSheet } from 'react-native-ui-kitten';
import { scaleVertical } from '../utils/scale'; 
import {StyleSheet} from 'react-native'


const Styles = RkStyleSheet.create(theme => ({
    root: {
      backgroundColor: theme.colors.screen.base,
      flex: 1,
      justifyContent: 'space-between',
    },
    heading: {
        paddingBottom: 12.5,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.screen.base,
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 17.5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.border.base,
        alignItems: 'center',
    },
    button: {
        marginHorizontal: 16,
        marginBottom: 32,
    },
    rowButton: {
      flex: 1,
      paddingVertical: 24,
    },
    section: {
        marginVertical: 25,
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
    screen: {
      padding: scaleVertical(16),
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: theme.colors.screen.base,
    },
    image: {
      height: scaleVertical(77),
      resizeMode: 'contain',
    },
    header: {
      paddingBottom: scaleVertical(10),
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    content: {
      justifyContent: 'space-between',
    },
    login: {
    },
    save: {
      marginVertical: 20,
      justifyContent: 'space-between',
    },
    buttons: {
      flexDirection: 'row',
      marginBottom: scaleVertical(24),
      marginHorizontal: 24,
      justifyContent: 'space-around',
    },
    textRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      borderColor: theme.colors.border.solid,
    },
    rowInfo:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 24
    }
  }));



  export default Styles