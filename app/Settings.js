import React from 'react';
import { StyleSheet, View, ScrollView, Button, AsyncStorage, Alert } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {Input} from './Input';

export class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        blockchain: "prim"
    }
  }

  async componentWillMount() {
    this._retrieveData("@TokenCreator:blockchain");
  }

  _retrieveData = async (value) => {
    try {
      const value = await AsyncStorage.getItem('@TokenCreator:blockchain');
      if (value !== null) {
        // We have data!!
        console.log("value is: " + value);
        this.setState({
          blockchain: value
        })
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log("NO SUCH TOKEN");
      console.error(error);
    }
  }

  _handleSubmit = async (values, bag) => {
    
    try {
        Object.entries(values).forEach( async setting => {
            await AsyncStorage.setItem('@TokenCreator:${setting[0]}', setting[1]);
            // await AsyncStorage.setItem('@TokenCreator:', "Liddy");

        });
    } catch (error) {
        Alert.alert("Error saving data");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          <Formik
            async initialValues={{
              blockchain: JSON.stringify(this.state.blockchain),
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
