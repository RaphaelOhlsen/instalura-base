import { useState } from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleSubmit(ev) {
      ev.preventDefault();
      onSubmit(values);
    },
    handleChange(ev) {
      const fieldName = ev.target.getAttribute('name');
      const { value } = ev.target;
      setValues((prevValues) => ({
        ...prevValues,
        [fieldName]: value,
      }));
    },
  };
}
