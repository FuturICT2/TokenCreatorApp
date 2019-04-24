import React from 'react';
import { View, ScrollView, Button } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addToken } from '../actions/TokenActions';
import { showModal } from '../actions/modalActions'
import {Input} from '../components/Input';
import styles from '../styles/Styles'

const mapDispatchToProps = dispatch => ({
  addToken: (values) => {
    dispatch(addToken(values))
    dispatch(showModal({
      modalProps: {
        title: 'Token created',
        message: "Check wallet tab below to find newly created token",
      }, 
      modalType: 'info'
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
              tokenName: 'test',
              tokenSymbol: 'TST',
              max_supply: '6',
              decimals: '4',
              genesisSupply: '3'
            }}
            // tokenName: '',
            //   tokenSymbol: '',
            //   max_supply: null,
            //   decimals: null,
            //   genesisSupply: null
            // }}
            onSubmit={(values, actions) => this.props.addToken(values)}
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