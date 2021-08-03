import { useContext } from "react";
import { TransactionContext } from "../contexts/TransactionContext";
import { UserContext } from "../contexts/UserContext";

const useValidateTransaction = () => {
  const { activeUser } = useContext(UserContext);
  const { amount, setAmount, transactionType } = useContext(TransactionContext);

  const validateTransaction = () => {
    if (amount <= 0){
      alert('Please enter positive values only!');
      setAmount('');
      return false;
    }
    else if (transactionType === "Withdraw" && amount > activeUser.balance){
      alert('Insufficient funds, transaction failed!')
      return false;
    }
    return true;
  }
  return validateTransaction;
}

export default useValidateTransaction;