import React from 'react'
import { View } from 'react-native';
import styles from '../../styles/Styles'
import {
RkText,
RkButton,
} from 'react-native-ui-kitten';


const ConfirmModal = ({ closeModal, title, message }) => {
  return (
    <View style={styles.popupOverlay}>
      <View style={styles.popup}>
          <View style={styles.popupContent}>
            <RkText style={styles.popupHeader} rkType='header4'>{ title }</RkText>
            <RkText rkType='light'> { message } </RkText>
          </View>
          <View style={styles.popupButtons}>
            <RkButton
                onPress={ closeModal }
                style={styles.popupButton}
                rkType='clear'>
                <RkText>OK</RkText>
            </RkButton>
          </View>
      </View>
    </View>
  )
}

export default ConfirmModal