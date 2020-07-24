import { useState, useEffect } from 'react';

const useForm = (submitCallback) => {
  let [state, setState] = useState({});

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
    setState({});
  };

  return [state, handleChange, handleSubmit];
};

export default useForm;
