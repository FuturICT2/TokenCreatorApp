import React from 'react';
import { StyleSheet, View, ScrollView, AsyncStorage, Button } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
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
      <View style={styles.container} newToken={this.newToken}>
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
              <React.Fragment>
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

const styles = StyleSheet.create({
  list:{
    margin: 5,
    flex: 1,
  },
  button:{
    marginTop: 20,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
