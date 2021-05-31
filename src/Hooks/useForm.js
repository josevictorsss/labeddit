import { useState } from "react";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const changeState = (event) => {
    const { name, value } = event.target;
    const changeForm = { ...form, [name]: value };

    setForm(changeForm);
  };

  const clearInput = () => {
    setForm(initialValues);
  };

  return { form, changeState, clearInput };
};

export default useForm;
