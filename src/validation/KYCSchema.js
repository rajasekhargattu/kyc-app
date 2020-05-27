import * as Yup from 'yup';

export const KYCSchema = Yup.object().shape({
  designation: Yup.string()
    .matches(/^[a-z A-Z]+$/, 'Designation must be alphabets')
    .min(10)
    .max(20),
  identificationNumber: Yup.string()
    .when('identificationType', {
      is: 'ssn',
      then: Yup.string()
        .matches(
          /^(\d{3}-?[a-z A-Z 0-9]{3}-?\d{4}|XXX-XXX-XXXX)$/,
          'Social Security Number must be up to 12 digits with dashes'
        )
        // .min(9, 'Social Security Number must be up to 9 digits without dashes')
        .required('Social Security Number is Required'),
    })
    .when('identificationType', {
      is: 'passport',
      then: Yup.string()
        .matches(/^[a-z A-Z 0-9]+$/, 'Designation must be alpha Numeric')
        .min(7, 'Passport Number must be 7')
        .max(7, 'Passport Number must be 7')
        .required('Passport Number is Required'),
    }),
  salary: Yup.number()
    .typeError('Salary must be a number type')
    .positive()
    .integer()
    .min(10000, 'salary Must be greater than or equals to 5 digits')
    .max(9999999, 'salary Must be less than or equals to 7 digits'),
  // .test(
  //   'len',
  //   'salary Must be greater than or equals to 5 digits',
  //   val => val && val.toString().length >= 5
  // )
  // .test(
  //   'len',
  //   'salary Must be less than or equals to 7 digits',
  //   val => val && val.toString().length <= 7
  // ),
});
