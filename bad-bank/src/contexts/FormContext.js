import { createContext, useState } from 'react';

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [status, setStatus] = useState('');
  return (
    <FormContext.Provider value={{status, setStatus}}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContextProvider