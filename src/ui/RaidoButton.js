import React from 'react';
import PropTypes from 'prop-types';
import {  Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { RadioGroup } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  FormikRaidoButton: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    display: 'flex',
    marginRight: theme.spacing(1),
    alignSelf: 'center',
  },
}));

const FormikRaidoButton = ({ name, label, id, value, required = false }) => {
  const classes = useStyles();
  return (
    <Field
      id={id}
      className={classes.FormikRaidoButton}
      component={RadioGroup}
      name={name}
      required={required}
    >
      <FormLabel
        className={classes.label}
        component='legend'
        required={required}
      >
        Gender
      </FormLabel>
      <FormControlLabel
        value='male'
        control={<Radio color='primary' />}
        label='Male'
      />
      <FormControlLabel
        value='female'
        control={<Radio color='primary' />}
        label='Female'
      />
    </Field>
  );
};

FormikRaidoButton.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool.isRequired,
};

export default FormikRaidoButton;
