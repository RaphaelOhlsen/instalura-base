import { useState, useEffect } from 'react';

function formatErrors(yupErrorsInner = []) {
  return yupErrorsInner.reduce((errorObejectAcc, currentError) => {
    const fieldName = currentError.path;
    const errorMessage = currentError.message;

    return {
      ...errorObejectAcc,
      [fieldName]: errorMessage,
    };
  }, {});
}

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = formatErrors(err.inner);

      setErrors(formatedErrors);

      setIsFormDisabled(true);
    }
  }

  useEffect(() => {
    validateValues(values);
  }, [values]);

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
    isFormDisabled,
    setIsFormDisabled,
    errors,
    touchedFields,
    handleBlur(ev) {
      const fieldName = ev.target.getAttribute('name');
      setTouchedFields((prevTouchedFields) => ({
        ...prevTouchedFields,
        [fieldName]: true,
      }));
    },
  };
}
