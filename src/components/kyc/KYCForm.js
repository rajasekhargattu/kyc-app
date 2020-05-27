import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '../../ui/TextField';
import DropDown from '../../ui/DropDown';
import { KYCSchema } from '../../validation/KYCSchema';
import { editKYCData, initialKYCData } from '../../util/FormHelper';
import { DataContext } from '../../context/DataProvider';
import { useLocation, useHistory } from 'react-router-dom';
import {
  countryDropDown,
  identificationType,
  occupationType,
} from '../../util/constants/DropDown';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const KYCForm = () => {
  const classes = useStyles();
  const location = useLocation();
  let history = useHistory();
  const data = useContext(DataContext);
  // console.log('useLocation ==> ', location);

  function handleSubmit() {
    return (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
      if (!location.state) {
        alert('Customer Information is required to save the KYC Information');
        return;
      }
      location.state
        ? data.editKycData(values, location.state.customerID)
        : data.editKycData(values, location.state.customerID);
      history.push('/home');
    };
  }

  return (
    <Formik
      initialValues={
        location.state ? editKYCData(location.state) : initialKYCData()
      }
      validationSchema={KYCSchema}
      onSubmit={handleSubmit()}
    >
      {({ dirty, submitForm, isSubmitting, isValid }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form className={classes.from}>
            {isSubmitting && <LinearProgress style={{ width: '100%' }} />}
            <br />
            <DropDown
              dropDownData={countryDropDown}
              label='Country'
              name='country'
              id='kycCountry'
            />
            <br />
            <DropDown
              dropDownData={identificationType}
              label='Identification Type'
              name='identificationType'
              id='identificationType'
            />
            <TextField
              id='identificationNumber'
              name='identificationNumber'
              label='Identification Number'
              required
            />
            <DropDown
              dropDownData={occupationType}
              label='Occupation Type'
              name='occupationType'
              id='occupationType'
            />
            <TextField
              id='designation'
              name='designation'
              label='Designation'
            />
            <TextField id='salary' name='salary' label='Salary' />
            <br />
            <br />
            <Button
              variant='contained'
              color='primary'
              id='btnKycSave'
              disabled={!dirty || !isValid || isSubmitting}
              onClick={submitForm}
            >
              {location.state && location.state.kyc ? 'EDIT' : 'SAVE'}
            </Button>
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
};

export default React.memo(KYCForm);
