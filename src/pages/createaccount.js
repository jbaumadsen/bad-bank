import { useState, useContext, useEffect} from 'react';
import CardForm from '../components/CardForm';
import DisabledButton from '../components/DisabledButton';
import SubmitButton from '../components/SubmitButton';
import TextInput from '../components/TextInput';
import { UserContext } from '../contexts/UserContext';

function CreateAccount(){
  const [show, setShow] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formChanged, setFormChanged] = useState(false);
  const { users, setActiveUser } = useContext(UserContext);

  function handleCreate(){
    if (!name){
      alert('Please enter a valid name!');
      return;
    }   
    if (!email){
      alert('Please enter a valid email');
      return;
    }
    if (password.length < 8) {
      alert('Please enter a valid password that is longer than 8 characters!');
      return;
    }
    users.push({name, email, password, balance:100, id:users.length});
    setActiveUser(users[users.length-1]);
    
    console.log(JSON.stringify(users));
    setShow(false);
  }  
  
  async function handleFormChange({ target:{ id, value }}){
    id === 'name' ? setName(value) : id === 'email' ? setEmail(value) : setPassword(value);
  }

  useEffect(() => {
    if(!name && !email && !password){
      setFormChanged(false);
    } else {
      setFormChanged(true);
    }
  }, [name, email, password])

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setFormChanged(false);
  }

  return (
    <CardForm header="Create Account" >
      {show ? (  
        <>
          <TextInput text="Name" type="input" value={name} onChange={handleFormChange} />
          <TextInput text="Email" type="input" value={email} onChange={handleFormChange} />
          <TextInput text="Password" type="password" value={password} onChange={handleFormChange}/>
          {formChanged ? <SubmitButton onClick={handleCreate} text="Create account" />:
          <DisabledButton text="Create Account" />}
        </>
      ):(
        <>
          <span className="emphasized">Success! Acount created.</span>
          <SubmitButton onClick={clearForm} text="Create another account" />
        </>
      )}
    </CardForm>
  )
}

export default CreateAccount;