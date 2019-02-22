import React from 'react';
import { StyleSheet, View, ScrollView, Button, AsyncStorage, Alert } from 'react-native';
import Reactotron from 'reactotron-react-native'

import { Formik } from 'formik';
import * as Yup from 'yup';

import {Input} from './Input';

console.tron = Reactotron

export class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blockchain: null,
      mainCurrency: null,
      profileName: null
    }
  }

  async componentDidMount() {
    const blockchain = await this._retrieveData("@TokenCreator:blockchain");
    const mainCurrency = await this._retrieveData("@TokenCreator:mainCurrency");
    const profileName = await this._retrieveData("@TokenCreator:profileName");

    this.setState({
      blockchain: blockchain,
      mainCurrency: mainCurrency,
      profileName: profileName
    })
  }

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.tron.display({
        name: 'Async Storage Vals',
        value: value,
        important: true,
      })
      if (value !== null) {
        // We have data!!
        console.log("value is: " + value);
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
            await AsyncStorage.setItem('@TokenCreator:'+setting[0], setting[1]);

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
            enableReinitialize
            async initialValues={{
              blockchain: this.state.blockchain,
              mainCurrency: this.state.mainCurrency,
              profileName: this.state.profileName,
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
                disabled={!isValid }
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
