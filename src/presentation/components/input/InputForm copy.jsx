import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, FormLabel } from '@mui/material';
import useForm from '../../hooks/useForm';

import fieldsValidator from '../../../validation/validators/fieldsValidator';

// const Child = (children) => ({ children });

const Child = (props) => React.Children.map((children, child) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, { ...props });
  }
  return child;
});

// function InputForm({
//   label,
//   type,
//   name,
//   value,
//   onChange,
//   required,
//   messageError,
// }) {
function InputForm({ children }, props) {
  const {
    label,
    value,
    required,
    messageError,
  } = props;
  const { error, setError } = useForm();

  console.log('CHILDREN: ', children);

  useEffect(() => {
    if (value !== '') setError(false);
  }, [value]);

  const handleError = ({ target }) => {
    if (target.value === '') setError(true);
    if (!fieldsValidator(target)) setError(true);
  };

  // const dinamicChildren = React.Children.map(children, child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child);
  //   }
  //   return child;
  // }

  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      {/* <FormControl
        className={error && 'border-danger'}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onBlur={required && handleError}
      /> */}
      {/* <FormControl>
        <Child
          className={error && 'border-danger'}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onBlur={required && handleError}
        />
      </FormControl> */}
      {/* <FormControl>
        {
          React.Children.map((children, child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                label,
                type,
                name,
                value,
                onChange,
                required,
                messageError,
              });
            }
            return child;
          })
        }
      </FormControl> */}
      {/* <FormControl>
        <Child
          className={error && 'border-danger'}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onBlur={required && handleError}
        />
      </FormControl> */}
      {/* <FormControl
        className={error && 'border-danger'}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onBlur={required && handleError}
      >
        {children}
      </FormControl>
      {error && <span className="error">{messageError}</span>}
    </FormGroup> */}
      <FormControl>
        <Child props={{ ...props }} onBlur={required && handleError} />
      </FormControl>
      {error && <span className="error">{messageError}</span>}
    </FormGroup>
  );
}

InputForm.defaultProps = {
  label: '',
  required: false,
  messageError: 'This field is required',
};

InputForm.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
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
