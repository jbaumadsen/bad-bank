import { Card } from 'react-bootstrap';



function Home(){
  return (
    <div className="justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>WELCOME TO THE BANK</Card.Title>
          <Card.Text>
            For all your banking needs
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="/img/piggy.jpg" />
      </Card>
    </div>
  )
}

export default Home;