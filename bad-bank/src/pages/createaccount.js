import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext'


function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formChanged, setFormChanged] = React.useState(false);
  const ctx = React.useContext(UserContext);  
  console.log(JSON.stringify(ctx.users));

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name')){
      alert('Please enter a valid name!');
      return;
    }   
    if (!validate(email,    'email')){
      alert('Please enter a valid email');
      return;
    }
    if (password.length < 8) {
      alert('Please enter a valid password!');
      console.log('password length is ' + password.length);
      return;
    }
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }  
  
  function handleFormChange({ target:{ id, value }}){
    setFormChanged(true);
    id === 'name' ? setName(value) : id === 'email' ? setEmail(value) : setPassword(value);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setFormChanged(false);
  }

  return (
    <>
      <h1>Create Account</h1>
      <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        style={{ width: '18rem' }}
      >
      {show ? (  
                <>
                  Name<br/>
                  <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleFormChange} /><br/>
                  Email address<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleFormChange}/><br/>
                  Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handleFormChange}/><br/>
                  {formChanged ? <Button type="submit" className="btn btn-primary" onClick={handleCreate} >Create<br/>Account</Button> : 
                  !ctx.users[0] ? <Button type="submit" className="btn " onClick={handleCreate} disabled>Create<br/>Account</Button> :
                  <Button type="submit" className="btn " onClick={handleCreate} disabled>Add Another<br/>Account</Button>}
                </>
              ):(
                <>
                  <h5>Success! Acount created.</h5>
                  <Button type="submit" className="btn  btn-primary" onClick={clearForm}>Add another account</Button>
                </>
              )}
      </Card>
    </>
  )
}

export default CreateAccount;