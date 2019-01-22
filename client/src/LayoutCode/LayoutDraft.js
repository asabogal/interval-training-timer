import React, { Component } from 'react';
import { Jumbotron, Button, Container, Col, Row } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
        <Col xs="12">
        <Jumbotron>
        <Container>
        <div>
        <Button>Settings</Button>
        </div>
        </Container>
      
        <br></br>
   
        <Container className="container-bg">
          <Col>
          Hi Intensity
          <h1 className="display-1">00:30</h1>
          </Col>
          <Row>
         <Col>
         <h5 className="text-left">01:15</h5>
         </Col>
         <Col>
         <h5 className="text-right">10:45</h5>
         </Col>
         </Row>

         <Row>
         <Col>
         <p className="text-left">Remaining </p>
         </Col>
         <Col>
         <p className="text-right">Elapsed </p>
         </Col>
         </Row>
        </Container>
      
       
       
          <hr className="my-3" />
          <br></br>
        <Container>
            <Button className="btn-circle btn-xl" color="primary">START</Button> <br></br>
              <br></br>
            <Button  color="primary">RESET</Button>
        </Container>
            
    
          </Jumbotron>
          </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default Layout;
