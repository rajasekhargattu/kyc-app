import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button, LinearProgress } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ErrorMessage } from 'formik';
import TextField from '../../ui/TextField';
import RaidoButton from '../../ui/RaidoButton';
import DropDown from '../../ui/DropDown';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';
import { ProfileSchema } from '../../validation/ProfileSchema';
import { countryDropDown } from '../../util/constants/DropDown';
import { useLocation, useHistory } from 'react-router-dom';
import { editPofileData, initialProfileData } from '../../util/FormHelper';
import { DataContext } from '../../context/DataProvider';
// import { Alert, AlertTitle } from '@material-ui/lab';
// import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const ProfileForm = () => {
  const classes = useStyles();
  const location = useLocation();
  let history = useHistory();
  const data = useContext(DataContext);
  // console.log('useLocation ==> ', location);
  function handleSubmit() {
    return (values, { setSubmitting, resetForm }) => {
      console.log('data.length', data.rows.length, values);

      setSubmitting(false);
      resetForm();
      location.state
        ? editProfile(values, location.state.customerID)
        : addProfile(values);
    };
  }

  function editProfile(edit) {
    data.editProfileData(edit, location.state.customerID);
    history.push('/KYCInformation', location.state);
  }
  function addProfile(profile) {
    const customerID = '10000' + (data.rows.length + 1);
    const profileData = { customerID: customerID, profile: { ...profile } };
    data.addProfileData(profileData);
    history.push('/KYCInformation', profileData);
  }

  function nextHandler() {
    history.push('/KYCInformation', location.state);
  }
  return (
    <Formik
      initialValues={
        location.state ? editPofileData(location.state) : initialProfileData()
      }
      validationSchema={ProfileSchema}
      onSubmit={handleSubmit()}
    >
      {({ dirty, submitForm, isSubmitting, isValid, errors }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form className={classes.from}>
            {isSubmitting && <LinearProgress style={{ width: '100%' }} />}
            <TextField
              id='firstName'
              name='firstName'
              label='First Name'
              required
            />
            {/* <ErrorMessage
              name={firstName}
              render={msg => <div id='errors'>{'errors'}</div>}
            /> */}
            <TextField id='mName' name='middleName' label='Middle Name' />
            <TextField
              id='lastName'
              name='lastName'
              label='Last Name'
              required
            />
            <RaidoButton id='gender' name='gender' label='Gender' required />
            <Field
              component={KeyboardDatePicker}
              id='dob'
              variant='inline'
              autoOk
              disableToolbar
              required
              name='date'
              label='Date Of Birth '
              openTo='year'
              disableFuture
              placeholder='Enter DOB (mm-dd-yyyy) '
              format='MM-dd-yyyy'
              views={['year', 'month', 'date']}
            />
            <br />
            <br />
            <TextField
              name='address'
              id='address'
              label='Address'
              rowsMax='4'
              multiline
              required
              variant='outlined'
            />
            <TextField id='city' name='city' label='City' required />
            <TextField id='state' name='state' label='State' required />
            <DropDown
              dropDownData={countryDropDown}
              id='country'
              label='Country'
              name='country'
              defaultValue={'india'}
            />
            <TextField
              id='postalCode'
              name='postalCode'
              label='Postal Code'
              required
            />
            <br />
            {/* <Button
              variant='contained'
              color='primary'
              disabled={!dirty || !isValid || isSubmitting}
              onClick={submitForm}
            >
              {/* {location.state ? 'EDIT' : 'SAVE'} }
              {location.state ? (location.state.kyc ? 'EDIT' : 'NEXT') : 'SAVE'}
            </Button> */}
            {location.state ? (
              location.state.kyc ? (
                <Button
                  id='btnSave'
                  variant='contained'
                  color='primary'
                  disabled={!dirty || !isValid || isSubmitting}
                  onClick={submitForm}
                >
                  EDIT
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  id='btnSave'
                  onClick={nextHandler}
                >
                  NEXT
                </Button>
              )
            ) : (
              <Button
                variant='contained'
                color='primary'
                id='btnSave'
                disabled={!dirty || !isValid || isSubmitting}
                onClick={submitForm}
              >
                SAVE
              </Button>
            )}
          </Form>
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
};

export default React.memo(ProfileForm);
