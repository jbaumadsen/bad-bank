import React from 'react';
import { Card } from 'react-bootstrap';


const CardForm = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
      <Card
        bgcolor="primary"
        header={props.header}
        style={{ width: '18rem' }}
      >
        {props.children}
      </Card>
    </>
  );
}

export default CardForm;