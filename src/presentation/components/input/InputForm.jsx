import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup } from '@mui/material';
import useForm from '../../hooks/useForm';

import fieldsValidator from '../../../validation/validators/fieldsValidator';

function InputForm({ children, messageError }) {
  const {
    // label,
    value,
    required,
    // messageError,
  } = children.props;
  const { error, setError } = useForm();

  const Child = (props) => React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...props });
    }
    return child;
  });

  useEffect(() => {
    if (value !== '') setError(false);
  }, [value]);

  const handleError = ({ target }) => {
    if (value === '') setError(true);
    if (!fieldsValidator(target)) setError(true);
  };

  return (
    <FormGroup>
      {/* <FormLabel>{label}</FormLabel> */}
      <FormControl>
        <Child onBlur={required && handleError} />
      </FormControl>
      {error && <span className="error">{messageError}</span>}
    </FormGroup>
  );
}

InputForm.defaultProps = {
  // label: '',
  required: false,
  messageError: 'This field is required',
};

InputForm.propTypes = {
  children: PropTypes.element.isRequired,
  // label: PropTypes.string,
  // type: PropTypes.string,
  // name: PropTypes.string.isRequired,
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  messageError: PropTypes.string,
};
// InputForm.propTypes = {
//   children: PropTypes.element.isRequired,
//   label: PropTypes.string,
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   required: PropTypes.bool,
//   messageError: PropTypes.string,
// };

export default InputForm;
