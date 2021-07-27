import React from 'react';
import { Button } from 'react-bootstrap';

const DisabledButton = ({ text }) => {
  return ( <Button className="btn  btn-primary" disabled > {text} </Button> );
}

export default DisabledButton;