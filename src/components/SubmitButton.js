
import { Button } from 'react-bootstrap';

const SubmitButton = ({ onClick, text }) => {
  return ( <Button type="submit" className="btn  btn-primary" onClick={onClick} > {text} </Button> );
}

export default SubmitButton;