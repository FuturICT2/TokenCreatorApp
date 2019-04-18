import React from 'react';
import {
  View,
  Image,
  Keyboard,
} from 'react-native';
import {
  RkButton,
  RkText,
  RkTextInput,
  RkTheme,
  RkAvoidKeyboard,
} from 'react-native-ui-kitten';

export default class SignUp extends React.Component {

  getThemeImageSource = (theme) => (
      require('../../assets/images/logo.png')
  );

  renderImage = () => (
    <Image style={styles.image} source={this.getThemeImageSource(RkTheme.current)} />
  );

  onSignUpButtonPressed = () => {
    // this.props.navigation.goBack();
  };

  onSignInButtonPressed = () => {
    // this.props.navigation.navigate('Login1');
  };
// https://til.hashrocket.com/posts/vahuw4phan-check-the-password-confirmation-with-yup
  render = () => (
    <RkAvoidKeyboard
      style={styles.screen}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}>
      <View style={{ alignItems: 'center' }}>
        {this.renderImage()}
        <RkText rkType='h1'>Registration</RkText>
      </View>
      <View style={styles.content}>
        <View style={styles.root}>
          <ScrollView >
            <Formik
              enableReinitialize
              async initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={this._handleSubmit}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .min(2, 'Too Short!')
                  .max(20, 'Too Long!')
                  .required('Name required'),
                email: Yup.string()
                  .email('Invalid email')
                  .required(),
                password: Yup.string()
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
                    error={errors.name}
                  />
                  <Input
                    label="Email"
                    autoCapitalize="none"
                    value={values.email}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="email"
                    error={errors.email}
                  />
                  <Input
                    label="Password"
                    autoCapitalize="none"
                    value={values.password}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="password"
                    error={errors.password}
                  />
                  <Input
                    label="Confirm Password"
                    autoCapitalize="none"
                    value={values.confirmPassword}
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    name="confirmPassword"
                    error={errors.confirmPassword}
                  />
                <Button
                  backgroundColor="Blue"
                  style={styles.button}
                  onPress={handleSubmit}
                  disabled={!isValid }
                  title="Save changes"
                  loading={isSubmitting}
                  />
                </React.Fragment>
              )}
            />
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.textRow}>
            <RkText rkType='primary3'>Already have an account?</RkText>
            <RkButton rkType='clear' onPress={this.onSignInButtonPressed}>
              <RkText rkType='header6'>Sign in now</RkText>
            </RkButton>
          </View>
        </View>
      </View>
    </RkAvoidKeyboard>
  )
}