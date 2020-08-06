import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, TextField, FormHelperText } from '@material-ui/core';

function FormField({
  type, name, value, onChange, required, label, helper,
}) {
  const idPrefix = 'id-';

  return (
    <FormControl fullWidth>
      <TextField
        id={idPrefix + name}
        multiline={type === 'textarea'}
        name={name}
        type={type}
        value={value}
        label={label}
        onChange={onChange}
        required={required}
        fullWidth
      />
      <FormHelperText id={idPrefix + name}>{helper}</FormHelperText>
    </FormControl>
  );
}

FormField.defaultProps = {
  type: 'text',
  required: false,
  value: '',
  helper: '',
};

FormField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  helper: PropTypes.string,
};

export default FormField;
