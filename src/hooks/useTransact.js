import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { TransactionContext } from '../contexts/TransactionContext';
import useValidateTransaction from './useValidateTransaction';

const useTransact = () => {
  const {users, setUsers, activeUser} = useContext(UserContext);
  const validateTransaction = useValidateTransaction();
  const { setShow, amount, transactionType } = useContext(TransactionContext);

  const Transact = () => {
    if(validateTransaction()){
      const newUsers = users.map((user) => {
        if (user.name === activeUser.name){
          transactionType === 'Deposit' ? user.balance += amount : user.balance-= amount;
        }  
        return user;   
      });
      setUsers(newUsers);
      setShow(false);
    }
  }
  return Transact;
}
 
export default useTransact;