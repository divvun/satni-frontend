import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Checkbox
} from 'redux-form-material-ui';

class Languages extends Component {
  render () {
    return (
      <form>
        <Field component={Checkbox} name='sma' label='South Saami' />
        <Field component={Checkbox} name='sme' label='North Saami' />
        <Field component={Checkbox} name='smj' label='Lule Saami' />
        <Field component={Checkbox} name='smn' label='Inari Saami' />
        <Field component={Checkbox} name='fin' label='Finnish' />
        <Field component={Checkbox} name='nob' label='Norwegian' />
        <Field component={Checkbox} name='swe' label='Swedish' />
        <Field component={Checkbox} name='eng' label='English' />
        <Field component={Checkbox} name='lat' label='Latin' />
      </form>
    );
  }
}

export default reduxForm({
  form: 'languages',  // a unique identifier for this form
  initialValues: {
    'sma': true,
    'sme': true,
    'smj': true,
    'smn': true,
    'fin': true,
    'nob': true,
    'swe': true,
    'eng': true,
    'lat': true
  }
})(Languages);
