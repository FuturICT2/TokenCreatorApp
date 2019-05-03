import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkText,
} from 'react-native-ui-kitten';
import styles from '../styles/Styles'

let Profile = ({ profile, logout }) => (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>PROFILE</RkText>
        </View>
        <View style={styles.row}>
          <View style={styles.rowInfo}>
            <RkText rkType='header6'>Email</RkText>
            <RkText>{ profile.email }</RkText>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowInfo}>
            <RkText rkType='header6'>name</RkText>
            <RkText>{ profile.name }</RkText>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <RkText rkType='header6'>Ethereum address</RkText>
            <RkText>{ profile.ethereumAddress }</RkText>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View style={[styles.row, styles.heading]}>
          <RkText rkType='primary header6'>OPTIONS</RkText>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.rowButton} onPress={logout}>
            <RkText rkType='header6'>Logout</RkText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
)

export default Profile