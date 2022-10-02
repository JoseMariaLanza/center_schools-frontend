import PropTypes from 'prop-types';
import validateField from './regExpFields.json';

const fieldsValidator = ({ validate, value }) => {
  let isValid = false;
  switch (validate) {
    case 'email':
      isValid = new RegExp(validateField.email, 'g').test(value);
      break;
    case 'lulu':
      isValid = ((new RegExp(validateField.lulu, 'g').test(value) && !new RegExp(validateField.jose, 'g').test(value)) || (!new RegExp(validateField.lulu, 'g').test(value) && new RegExp(validateField.jose, 'g').test(value)));
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
