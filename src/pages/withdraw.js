import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';

function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [failed, setFailed]     = React.useState(false);
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [formChanged, setFormChanged] = React.useState(false);
  const {users, setUsers} = React.useContext(UserContext);

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
    else if (withdrawAmount > users[0].balance){
      setStatus('Error: Insufficient funds');
      setTimeout(() => setStatus(''),3000);
      setFailed(true);
      setShow(false);
      return false;
    }
    return true;
  }

  function handleWithdraw(){
    if (!validate(withdrawAmount)){
      
      return;
    }  
    console.log(users[0].balance); 
    const newUsers = users.map(user => {
      if(user.name === users[0].name) user.balance -= withdrawAmount;
      return user;
    })
    
    
    console.log(newUsers[0].balance);
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

  function clearForm(){
    setWithdrawAmount();
    setShow(true);
    setFormChanged(false);
    setFailed(false);
  }

  return (
    <>
      <h1>Withdraw</h1>
      <Card
        bgcolor="primary"
        header="withdraw"
        status={status}
        style={{ width: '18rem' }}
      >
        {!users[0] ? <>Please Create an Account</>:
        show ? (  
          <>
            <div className='space-div'>
              <span>BALANCE:</span>
              <p>${users[0].balance}</p>
            </div>
            <br/>
            <br/>
            Withdraw Amount<br/>
            <input type="text" className="form-control" id="withdrawamount" placeholder="Enter Withdraw Amount" value={withdrawAmount} onChange={handleFormChange}/><br/>
            {formChanged ? <Button type="submit" className="btn btn-primary" onClick={handleWithdraw} >Withdraw</Button> : 
            <Button type="submit" className="btn btn-primary" onClick={handleWithdraw} disabled>Withdraw</Button>}
          </>
        ):
        failed ? (
          <>
            <h5>Insufficient funds, transaction failed!</h5>
            <Button type="submit" className="btn  btn-primary" onClick={clearForm} >Make another withdrawl</Button>
          </>
        ):(
          <>
            <h5>${withdrawAmount} successfully withdrawn!</h5>
            <Button type="submit" className="btn  btn-primary" onClick={clearForm}>Make another withdrawl</Button>
          </>
        )}
    </Card>
  </>
  )
}

export default Withdraw;