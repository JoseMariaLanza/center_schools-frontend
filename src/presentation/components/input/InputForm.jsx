import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup } from '@mui/material';
import useForm from '../../hooks/useForm';

import fieldsValidator from '../../../validation/validators/fieldsValidator';

function InputForm({ children, messageError }) {
  const {
    value,
    required,
  } = children.props;
  const childrenProps = children.props;

  const { error, setError } = useForm();

  useEffect(() => {
    if (value !== '') setError(false);
  }, [value]);

  const handleError = ({ target }) => {
    if (value === '') setError(true);
    if (!fieldsValidator(target)) setError(true);
  };

  return (
    <FormGroup>
      <FormControl
        autoFocus
        required={childrenProps.required || required}
        onBlur={handleError}
      >
        {children}
      </FormControl>
      {error && <span className="text-danger">{childrenProps.messageError || messageError}</span>}
    </FormGroup>
  );
}

InputForm.defaultProps = {
  required: false,
  messageError: 'This field is required',
  childrenProps: {
    label: '',
    type: 'text',
  },
};

InputForm.propTypes = {
  children: PropTypes.element.isRequired,
  childrenProps: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    messageError: PropTypes.string,
  }),
  required: PropTypes.bool,
  messageError: PropTypes.string,
};

export default InputForm;
