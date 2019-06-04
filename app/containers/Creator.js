import React from 'react';
import { View, ScrollView, Button } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addToken } from '../actions/TokenActions'
import { showModal } from '../actions/modalActions'
import { fetchCreateToken } from '../actions/apiActions'
import {Input} from '../components/Input';
import styles from '../styles/Styles'

const mapDispatchToProps = dispatch => ({
  // addToken: (values) => {
  //   // dispatch(addToken(values))
  //   dispatch(fetchCreateToken(values))
  //   dispatch(showModal({
  //     modalProps: {
  //       title: 'Token created',
  //       message: "Check wallet tab below to find newly created token",
  //     }, 
  //     modalType: 'info'
  //   }))
  // },
  confirmAddToken: (token) =>{
    dispatch(showModal({
      modalProps: {
        modalIsOpen: true,
        title: 'Add Token',
        message: "Are you sure you would like to add this token?",
        action: () => {
          dispatch(fetchCreateToken(token))
          dispatch(showModal({
            modalProps: {
              title: 'Token created',
              message: "Check wallet tab below to find newly created token",
            }, 
            modalType: 'info'
          }))
        },
      },
      modalType: "confirm"
    }))
  }
 })

const mapStateToProps = state => state


class Creator extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <View style={styles.root}>
        <ScrollView style={styles.list}>
          <Formik
            style={styles.form}
            initialValues={{
              name: 'test',
              symbol: 'TST',
              max_supply: '6',
              decimals: '4',
              genesisSupply: '3',
              purpose:'It\'s for testing'
            }}
            // name: '',
            //   symbol: '',
            //   max_supply: null,
            //   decimals: null,
            //   genesisSupply: null
            // }}
            onSubmit={(values, actions) => this.props.confirmAddToken(values)}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required(),
              symbol: Yup.string()
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
                .required(),
              purpose: Yup.string()
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
                  value={values.name}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="name"
                  error={touched.name && errors.name}
                />
                <Input
                  label="Token Symbol"
                  autoCapitalize="none"
                  value={values.symbol}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="symbol"
                  error={touched.symbol && errors.symbol}
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
                <Input
                  label="Purpose"
                  autoCapitalize="none"
                  value={values.purpose}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="purpose"
                  error={touched.purpose && errors.purpose}
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
      </View>
    )}
}

Creator = connect( mapStateToProps, mapDispatchToProps )(Creator);
export default Creator