'use strict';

export const registrationSchema = {
  'firstName': {
    notEmpty: true,
    matches: {
      options: ['^[A-Z ,.\'-]+', 'gi'],
      errorMessage: 'First name should be alphabetical.'
    },
    isLength: {
      options: [{ max: 200}],
      errorMessage: 'Must be no more than 200 characters'
    },
  },
  'lastName': {
    notEmpty: true,
    matches: {
      options: ['^[A-Z ,.\'-]+', 'gi'],
      errorMessage: 'Last name should be alphabetical.'
    },
    isLength: {
      options: [{ max: 200}],
      errorMessage: 'Must be no more than 200 characters'
    },
  },
  'email': {
    notEmpty: true,
    isEmail: {
      errorMessage: 'Invalid Email'
    }
  },
  'password': {
    notEmpty: true,
    isLength: {
      options: [{ min: 12}],
      errorMessage: 'Must be at least 12 characters'
    },
    matches: {
      options: ['(?=.*[a-zA-Z])(?=.*[0-9]+).*', 'g'],
      errorMessage: 'Password must be alphanumeric.'
    },
    errorMessage: 'Invalid password'
  }
};


export const loginSchema = {
  'email': {
    notEmpty: true,
    isEmail: {
      errorMessage: 'Invalid Email'
    }
  }
};

export const datepickerRangeSchema = {
  'startDate' : {
    isDate: true,
    notEmpty: false
  },
  'endDate' : {
    isDate: true,
    notEmpty: false
  }
};