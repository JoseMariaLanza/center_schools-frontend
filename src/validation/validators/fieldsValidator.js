import PropTypes from 'prop-types';
import validateField from './regExpFields.json';

const fieldsValidator = ({ type, value, compareWith }) => {
  let isValid = false;
  switch (type) {
    case 'email':
      isValid = new RegExp(validateField.email, 'g').test(value);
      break;
    case 'passwordConfirmation':
      isValid = value === compareWith;
      break;
    default:
      if (value.length > 0) isValid = true;
      break;
  }
  return isValid;
};

fieldsValidator.defaultProps = {
  value: null,
};

fieldsValidator.propTypes = {
  name: PropTypes.string.isRequired,
};

export default fieldsValidator;
