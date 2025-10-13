import * as Yup from 'yup';

export const registrationFormSchema = Yup.object({
  firstName: Yup.string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must be less than 50 characters'),

  lastName: Yup.string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must be less than 50 characters'),

  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),

  phoneCountryCode: Yup.string()
    .required('Country code is required'),

  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{7,15}$/, 'Phone number must be between 7 and 15 digits'),

  dob: Yup.string()
    .required('Date of Birth is required')
    .matches(
      /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'Date of Birth must be in DD/MM/YYYY format'
    ),

  gender: Yup.string()
    .required('Gender is required')
    .oneOf(['female', 'male', 'other'], 'Please select a valid gender'),
});
