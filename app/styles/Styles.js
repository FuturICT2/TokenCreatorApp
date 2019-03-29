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
  }));



  export default Styles