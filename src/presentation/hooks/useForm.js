import { useState } from 'react';

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [error, setError] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    error,
    setError,
  };
};

export default useForm;
