import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().min(5).max(12).required(),
  middleName: Yup.string().min(5).max(12),
  lastName: Yup.string().min(5).max(12).required(),
  gender: Yup.string(),
  address: Yup.string().min(5).max(20).required(),
  city: Yup.string()
    .matches(/^[a-z A-Z]+$/, 'City must be alphabets')
    .min(6)
    .max(10)
    .required(),
  state: Yup.string()
    .matches(/^[a-z A-Z]+$/, 'City must be alphabets')
    .min(6)
    .max(10)
    .required(),
  postalCode: Yup.number()
    .typeError('Postal Code must be a number type')
    .positive()
    .required()
    .integer()
    .test(
      'len',
      'Postal Code Must be greater than or equals to 6 digits',
      val => val && val.toString().length >= 6
    )
    .test(
      'len',
      'Postal Code Must be less than or equals to 10 digits',
      val => val && val.toString().length <= 10
    ),
});
