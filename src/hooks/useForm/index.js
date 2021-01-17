import { useState } from 'react';

const useForm = initialState => {
  const [input, setInput] = useState(initialState);

  const handleOnChange = ({ target }) =>
    setInput({ ...input, [target.name]: target.value });
    
  return [input, handleOnChange, setInput];
}

export default useForm;