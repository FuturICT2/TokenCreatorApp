import React from 'react';
import {
  View,
  Image,
  Keyboard,
  ScrollView,
  Button
} from 'react-native';
import {Input} from '../components/Input';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  RkButton,
  RkText,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';
import styles from '../styles/Styles'
import { fetchSignup } from '../actions/apiActions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


const mapDispatchToProps = dispatch => ({
  signup: (values) => {
    dispatch(fetchSignup(values))
  }
 })

const mapStateToProps = state => state

class Signup extends React.Component {


  constructor(props) {
    super(props)
  }
  

  onSignUpButtonPressed = () => {
    // this.props.navigation.goBack();
  };

  onSignInButtonPressed = () => {
    // this.props.navigation.navigate('Login1');
  };
// https://til.hashrocket.com/posts/vahuw4phan-check-the-password-confirmation-with-yup
  render = () => (
    <View style={styles.screen}>
      <View style={{ alignItems: 'center' }}>
        {/* <Image style={styles.image} source={  require('../../assets/images/logo.png') } /> */}
        <RkText rkType='h1'>Registration</RkText>
      </View>
      <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Already have an account?</RkText>
            <RkButton rkType='clear' onPress={Actions.pop}>
              <RkText rkType='header6'>Sign in now</RkText>
            </RkButton>
          </View>
        </View>
      <RkAvoidKeyboard
      style={styles.content}
      onStartShouldSetResponder={() => false}
      onResponderRelease={() => Keyboard.dismiss()}>
          <ScrollView style={styles.list}>
            <Formik
              style={styles.form}
              initialValues={{
                name: 'Prof Snape',
                email: 'snape@snapecoin.com',
                password: 'hodlee',
                confirmPassword: 'hodlee'
              }}
              // tokenName: '',
              //   tokenSymbol: '',
              //   max_supply: null,
              //   decimals: null,
              //   genesisSupply: null
              // }}
              onSubmit={(values, actions) => this.props.signup(values)}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .min(2, 'Too Short!')
                  .max(20, 'Too Long!')
                  .required('Name required'),
                email: Yup.string()
                  .email('Invalid email')
                  .required(),
                password: Yup.string()
                  .min(6, 'Too Short!')
                  .required('Password is required'),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Passwords must match')
              })}
              render={ ({ values,
                handleSubmit,
                setFieldValue,
                errors,
                touched,
                setFieldTouched,
                isValid,
                isSubmitting}) => (
                <React.Fragment>
                  <Input
                    label="Name"
                    autoCapitalize="none"
                    value={values.name}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="name"
                    error={touched.name && errors.name}
                  />
                  <Input
                    label="Email"
                    autoCapitalize="none"
                    value={values.email}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="email"
                    error={touched.email && errors.email}
                  />
                  <Input
                    label="Password"
                    autoCapitalize="none"
                    value={values.password}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="password"
                    error={touched.password && errors.password}
                  />
                  <Input
                    label="Confirm Password"
                    autoCapitalize="none"
                    value={values.confirmPassword}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="confirmPassword"
                    error={touched.confirmPassword && errors.confirmPassword}
                  />
                  <Button
                    backgroundColor="Blue"
                    style={styles.button}
                    onPress={handleSubmit}
                    // disabled={!isValid || isSubmitting }
                    title="Submit"
                    loading={isSubmitting}
                    />
                </React.Fragment>
              )}
            />
          </ScrollView>
        </RkAvoidKeyboard>
    </View>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);