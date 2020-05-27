import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import { TextField } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  FormikTextField: {
    width: '50vw',
  },
}));

const FormikTextField = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  multiline = false,
  rowsMax,
  variant,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.FormikTextField}>
      <Field
        id={id}
        required={required}
        autoComplete='off'
        component={TextField}
        label={label}
        multiline={multiline}
        name={name}
        rowsMax={rowsMax}
        fullWidth
        variant={variant}
        type={type}
        // helperText={<ErrorMessage component='div' name={name} />}
        // helperText={
        //   <ErrorMessage name={name} render={msg => <div>{msg}</div>} >
        //     msg=><div id='errors'>{Test}</div>
        //   </ErrorMessage>
        // }
      />
      {/* <ErrorMessage id='errors' component='div' name={name} /> */}
    </div>
  );
};

FormikTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default FormikTextField;
