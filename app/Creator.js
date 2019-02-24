import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Button } from 'react-native';
import { RkButton, RkStyleSheet } from 'react-native-ui-kitten';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {Input} from './Input';

// const api = (user) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user.email === "hello@gmail.com") {
//         reject({ email: 'Email already in use'});
//       } else {
//         resolve();
//       }
//     }, 3000);
// });

export class Creator extends React.Component {

  constructor(props) {
    super(props);
  }


  _handleSubmit = (values, bag) => {
    // this.setState({tokenProperties: values});
    const {newToken} = this.props;
    newToken(values);
  }

  render() {
    return (
      <View style={styles.root} newToken={this.newToken}>
        <ScrollView style={styles.list}>
          <Formik
            initialValues={{
              tokenName: '',
              tokenSymbol: '',
              max_supply: null,
              decimals: null,
              genesisSupply: null
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              tokenName: Yup.string()
                .required(),
              tokenSymbol: Yup.string()
                .min(3)
                .max(3)
                .required(),
              max_supply: Yup.number()
                .min(1)
                .required(),
              decimals: Yup.number()
                .min(1)
                .required(),
              genesisSupply: Yup.number()
                .min(1)
                .required()
            })}
            render={ ({ values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting}) => (
              <React.Fragment style={styles.form}>
                <Input
                  label="Token name"
                  autoCapitalize="none"
                  value={values.tokenName}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="tokenName"
                  error={touched.tokenName && errors.tokenName}
                />
                <Input
                  label="Token Symbol"
                  autoCapitalize="none"
                  value={values.tokenSymbol}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="tokenSymbol"
                  error={touched.tokenSymbol && errors.tokenSymbol}
                />
                <Input
                  label="Max. Supply"
                  autoCapitalize="none"
                  value={values.max_supply}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="max_supply"
                  error={touched.max_supply && errors.max_supply}
                />
                <Input
                  label="Decimals"
                  autoCapitalize="none"
                  value={values.decimals}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="decimals"
                  error={touched.decimals && errors.decimals}
                />
                <Input
                  label="Genesis Supply"
                  autoCapitalize="none"
                  value={values.genesisSupply}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="genesisSupply"
                  error={touched.genesisSupply && errors.genesisSupply}
                />
              <Button
                backgroundColor="Blue"
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting }
                title="Submit"
                loading={isSubmitting}
                />
              </React.Fragment>
            )}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base,
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    paddingBottom: 12.5,
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
}));