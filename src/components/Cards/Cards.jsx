import React from 'react'
import './cards.css'
import { Card, Container } from 'react-bootstrap';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, deaths, lastUpdate }}) => {
  if(!confirmed) {
    return 'Loading...';
  }

  return (
    <div className="card">
        <Container className="card-container" style={{display: 'flex'}}>
        <Card className="infected" style={{ width: '18rem', borderBottom: '10px solid rgba(75,192,192,0.5)'}}>
          <Card.Body>
            <Card.Title>Infected</Card.Title>
            <Card.Subtitle className="mb-2">
              <CountUp 
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{new Date(lastUpdate).toDateString()}</Card.Subtitle>
            <Card.Text>
              Number of active cases of COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="deaths" style={{ width: '18rem', borderBottom: '10px solid rgba(255, 0, 0, 0.5)' }}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Subtitle className="mb-2">
              <CountUp 
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{new Date(lastUpdate).toDateString()}</Card.Subtitle>
            <Card.Text>
              Number of deaths caused by COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
        </Container>
    </div>
  )
}

export default Cards;