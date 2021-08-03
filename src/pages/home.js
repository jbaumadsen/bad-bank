import { Card } from 'react-bootstrap';



function Home(){
  return (
    <div className="justify-content-center">
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title>WELCOME TO <br/><span className="company-name">BRO KIN TRUST BANK</span></Card.Title>
          <Card.Text>
            Gaining your money is our highest priority!
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="/img/piggy.jpg" />
      </Card>
    </div>
  )
}

export default Home;