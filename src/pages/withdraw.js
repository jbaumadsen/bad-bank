import { useState, useContext, useEffect } from 'react';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import BalanceDiv from '../components/Transaction/BalanceDiv';
import CardForm from '../components/CardForm';
import DisabledButton from '../components/DisabledButton';
import DropSelector from '../components/Transaction/DropSelector';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import { UserContext } from '../contexts/UserContext';

function Withdraw(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [failed, setFailed]     = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [formChanged, setFormChanged] = useState(false);
  const {users, setUsers, activeUser, setActiveUser} = useContext(UserContext);

  function validate(withdrawAmount){
    if (!withdrawAmount){
      setStatus('Error: No withdraw amount entered');
      alert('Please enter a valid withdraw amount!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }else if (withdrawAmount <= 0){
      setStatus('Error: Withdraw amount is not positive');
      alert('Please enter positive values only!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    else if (withdrawAmount > activeUser.balance){
      alert('Error: Insufficient funds');
      setWithdrawAmount('');
      // setStatus('Error: Insufficient funds');
      // setTimeout(() => setStatus(''),3000);
      // setFailed(true);
      // setShow(false);
      return false;
    }
    return true;
  }

  function handleWithdraw(){
    if (!validate(withdrawAmount)){
      return;
    }
    const newUsers = users.map(user => {
      if(user.name === activeUser.name) user.balance -= withdrawAmount;
      return user;
    })
    setUsers(newUsers);
    setShow(false);
  }  
  
  function handleFormChange({ target:{ value }}){
    if (value === '-' || !value){
      setWithdrawAmount(value);
      return;
    }
    if (isNaN(value)){
      alert('Please enter a numerical value');
      setWithdrawAmount('');
      return;
    }
    setFormChanged(true);
    setWithdrawAmount(parseInt(value));
  }

  useEffect(() =>{
    if(!withdrawAmount){
      setFormChanged(false);
    } else {
      setFormChanged(true);
    }
  }, [withdrawAmount, setFormChanged])

  function clearForm(){
    setWithdrawAmount('');
    setShow(true);
    setFormChanged(false);
    setFailed(false);
  }

  function selectAccount({target:{id}}){
    console.log(id);
    setActiveUser(users[id]);
    console.log(activeUser.name)
  }

  return (
    <>
      <CardForm header="Withdraw" status={status}>
        {!users[0] ? <>Please Create an Account</>:
        show ? (  
          <>
            <DropSelector activeUser={activeUser.name}>
              {users.map(user => <DropdownItem onClick={selectAccount} id={user.id} key={user.id}>{user.name}</DropdownItem>)}
            </DropSelector>
            <BalanceDiv balance={activeUser.balance} />
            <TextInput text="Withdraw Amount" type="input" value={withdrawAmount} onChange={handleFormChange}/>
            {formChanged ? 
            <SubmitButton onClick={handleWithdraw} text="Withdraw amount" /> : 
            <DisabledButton text="Withdraw amount" />}
          </>
        ): failed ? (
          <>
            <span className="emphasized" >Insufficient funds, transaction failed!</span>
            <SubmitButton onClick={clearForm} text="Enter another withdrawl" />
          </>
        ):(
          <>
            <span className="emphasized" >${withdrawAmount} successfully withdrawn!</span>
            <SubmitButton type="submit" className="btn  btn-primary" onClick={clearForm} text="Make another withdrawl" />
          </>
        )}
      </CardForm>
    </>
  )
}

export default Withdraw;