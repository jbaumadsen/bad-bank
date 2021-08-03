import { createContext, useState } from "react";

export const TransactionContext = createContext();

const TransactionContextProvider = (props) => {
  const [show, setShow] = useState(true);
  const [amount, setAmount] = useState('');
  const [formChanged, setFormChanged] = useState(false);
  const transactionType = props.transactionType;

  return (
    <TransactionContext.Provider value={{show, setShow, amount, setAmount, formChanged, setFormChanged, transactionType}}>
      {props.children}
    </TransactionContext.Provider>
  )
}

export default TransactionContextProvider;