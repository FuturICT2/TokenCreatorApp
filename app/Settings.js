import React from 'react';
import { StyleSheet, View, ScrollView, Button } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {Input} from './Input';

export class Settings extends React.Component {

  constructor(props) {
    super(props);
  }


  _handleSubmit = (values, bag) => {
    const {newSettings} = this.props;
    newSettings(values);
  }

  render() {
    return (
      <View style={styles.container} settings={this.newSettings}>
        <ScrollView style={styles.list}>
          <Formik
            initialValues={{
              blockchain: 'Ethereum Test Net',
              mainCurrency: 'CHF',
              profileName: 'Personal',
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              blockchain: Yup.string()
                .required(),
              mainCurrency: Yup.string()
                .required(),
              profileName: Yup.string()
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
                  label="Blockchain"
                  autoCapitalize="none"
                  value={values.blockchain}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="blockchain"
                  error={errors.blockchain}
                />
                <Input
                  label="Main Currency"
                  autoCapitalize="none"
                  value={values.mainCurrency}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="mainCurrency"
                  error={errors.mainCurrency}
                />
                <Input
                  label="Profile Name"
                  autoCapitalize="none"
                  value={values.profileName}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="profileName"
                  error={errors.profileName}
                />
              <Button
                backgroundColor="Blue"
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting }
                title="Save changes"
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
