import React from 'react';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dropDown: {
    width: '40%',
  },
}));

export default function DropDown({
  id,
  defaultValue,
  name,
  dropDownData,
  label,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl required className={classes.dropDown}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <Field
          component={Select}
          id={id}
          name={name}
          inputProps={{
            id: { id },
            defaultValue: { defaultValue },
          }}
        >
          {dropDownData.map(item => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </Field>
      </FormControl>
    </div>
  );
}
