import React from 'react';
import { Card, Button } from 'react-bootstrap';
import DisabledButton from '../components/DisabledButton';
import { UserContext } from '../contexts/UserContext'


function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const [formChanged, setFormChanged] = React.useState(false);
  const {users, setUsers} = React.useContext(UserContext);

  function validate(depositAmount){
    if (!depositAmount){
      setStatus('Error: No deposit amount entered');
      alert('Please enter a valid deposit amount!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }else if (depositAmount <= 0){
      setStatus('Error: Deposit amount is not positive');
      alert('Please enter positive values only!');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleDeposit(){
    if (!validate(depositAmount)){
      
      return;
    }  
    console.log(users[0].balance); 
    const newUsers = users.map(user => {
      if(user.name === users[0].name) user.balance += depositAmount;
      return user;
    })
    
    
    console.log(newUsers[0].balance);
    setUsers(newUsers);
    setShow(false);
  }  
  
  function handleFormChange({ target:{ value }}){
    console.log(value)
    if (value === '-'){
      setDepositAmount(value);
      return;
    }
    if (isNaN(value)){
      alert('Please enter a numerical value');
      setDepositAmount('');
      return;
    }
    setFormChanged(true);
    setDepositAmount(parseInt(value));
  }

  function clearForm(){
    setDepositAmount();
    setShow(true);
    setFormChanged(false);
  }

  return (
    <>
      <h1>Deposit</h1>
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        style={{ width: '18rem' }}
      >
        {!users[0] ? <>Please Create an Account</>:
        show ? (  
          <>
            <div className='space-div'>
              <span>BALANCE:</span>
              <span>${users[0].balance}</span>
            </div>
            <br/>
            <br/>
            DEPOSIT AMOUNT<br/>
            <input type="text" className="form-control" id="depositamount" placeholder="Enter Deposit Amount" value={depositAmount} onChange={handleFormChange}/><br/>
            {formChanged ? <Button type="submit" className="btn btn-primary" onClick={handleDeposit} >Deposit</Button> : 
            <DisabledButton text="Deposit" />}
          </>
        ):(
          <>
            <h5>${depositAmount} successfully deposited!</h5>
            <Button type="submit" className="btn  btn-primary" onClick={clearForm}>Make another deposit</Button>
          </>
        )}
    </Card>
  </>
  )
}

export default Deposit;