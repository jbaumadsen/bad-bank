import { useContext, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import BalanceDiv from './BalanceDiv';
import CardForm from '../CardForm';
import DisabledButton from '../DisabledButton';
import DropSelector from './DropSelector';
import SubmitButton from '../SubmitButton';
import TextInput from '../TextInput';
import { UserContext } from '../../contexts/UserContext'
import { TransactionContext } from '../../contexts/TransactionContext';
import useTransact from '../../hooks/useTransact';


function TransactionForm(props){
  const {users, activeUser, setActiveUser} = useContext(UserContext);
  const {show, setShow, amount, setAmount, formChanged, setFormChanged, transactionType } = useContext(TransactionContext);
  const transact = useTransact();  

  // function handleDeposit(){
  //   transact(amount, transactionType);
  // }  
  
  function handleFormChange({ target:{ value }}){
    if(!value){
      setAmount('');
      return;
    }
    if (value === '-'){
      setAmount(value);
      return;
    }
    if (isNaN(value)){
      alert('Please enter a numerical value');
      setAmount('');
      return;
    }
    setFormChanged(true);
    setAmount(parseInt(value));
  }

  function clearForm(){
    setAmount('');
    setShow(true);
  }

  function selectAccount({target:{id}}){
    setActiveUser(users[id]);
  }

  useEffect(() =>{
    if(!amount){
      setFormChanged(false);
    } else {
      setFormChanged(true);
    }
  }, [amount, setFormChanged])

  return (
    <>
      <CardForm header={transactionType}>
        {!users[0] ? <>Please Create an Account</>:
        show ? (  
          <>
            <DropSelector activeUser={activeUser.name}>
              {users.map(user => <DropdownItem onClick={selectAccount} id={user.id} key={user.id}>{user.name}</DropdownItem>)}
            </DropSelector>
            <BalanceDiv balance={activeUser.balance} />
            <TextInput text="Deposit amount" type="input" value={amount} onChange={handleFormChange}/>
            {formChanged && amount !== '-' ? <SubmitButton onClick={transact} text="Deposit amount"/> : 
            <DisabledButton text="Deposit amount" />}
          </>
        ):(
          <>
            <span className="emphasized">${amount} successfully deposited!</span>
            <SubmitButton onClick={clearForm} text="Make another deposit" />
          </>
        )}
      </CardForm>
    </>
  )
}

export default TransactionForm;