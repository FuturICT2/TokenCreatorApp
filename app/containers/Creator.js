import React from 'react';
import { KeyboardAvoidingView, ScrollView, Button } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { showModal } from '../actions/modalActions'
import { fetchCreateToken } from '../actions/apiActions'
import {Input} from '../components/Input';
import styles from '../styles/Styles'

const mapDispatchToProps = dispatch => ({
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
              message: "Check market tab below to find newly created token",
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
      <KeyboardAvoidingView style={styles.root} 
        behavior="padding" enabled>
        <ScrollView >
          <Formik
            style={styles.form}
            initialValues={{
              name: 'TreeCoin',
              symbol: 'TRC',
              purpose:'Plant a tree, earn a token',
              isBurnable: false,
              isTransferable: true,
              isMintable: true,
              isCapped: false,
              cap: '0'
            }}
            // name: '',
            //   symbol: '',
            // }}
            onSubmit={(values, actions) => this.props.confirmAddToken(values)}
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .required(),
              symbol: Yup.string()
                .min(3)
                .max(3)
                .required(),
              purpose: Yup.string()
                .required(),
              isBurnable: Yup.boolean()
                .required(),
              isTransferable: Yup.boolean()
                .required(),
              isMintable: Yup.boolean()
                .required(),
              isCapped: Yup.boolean()
                .required(),
              cap: Yup.number()
                .when("isCapped", {
                  is: true,
                  then: Yup.number().min(1).required()
                })
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
                  label="Purpose"
                  autoCapitalize="none"
                  value={values.purpose}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="purpose"
                  error={touched.purpose && errors.purpose}
                />
                <Input
                  label="Burnable"
                  value={values.isBurnable}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="isBurnable"
                  description="Whether the token can be destroyed"
                  error={touched.isBurnable && errors.isBurnable}
                />
                <Input
                  label="Transferable"
                  value={values.isTransferable}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="isTransferable"
                  description="Whether the token can be transferred between accounts"
                  error={touched.isTransferable && errors.isTransferable}
                />
                 <Input
                  label="Mintable"
                  value={values.isMintable}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="isMintable"
                  description="Whether tokens can be created on demand"
                  error={touched.isMintable && errors.isMintable}
                />
                <Input
                  label="Capped"
                  value={values.isCapped}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="isCapped"
                  description="Whether there is a limit to the amount of tokens"
                  error={touched.isCapped && errors.isCapped}
                />
                { values.isCapped &&
                  <Input
                  label="Cap"
                  value={values.cap}
                  onChange={setFieldValue}
                  onTouch={setFieldTouched}
                  name="cap"
                  error={touched.cap && errors.cap}
                  />}
              <Button
                backgroundColor="Blue"
                style={styles.button}
                onPress={handleSubmit}
                // disabled={!isValid }
                title="Submit"
                loading={isSubmitting}
                />
              </React.Fragment>
            )}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )}
}

Creator = connect( mapStateToProps, mapDispatchToProps )(Creator);
export default Creator