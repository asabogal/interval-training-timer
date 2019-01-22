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
        </Container>
        
       <Container>
         <Row>
         <Col>
         <h5>01:15</h5>
         </Col>
         <Col>
         <h5>10:45</h5>
         </Col>
         </Row>

         <Row>
         <Col>
         Remaining
         </Col>
         <Col>
         Elapsed
         </Col>
         </Row>
        
  
       </Container>
       
       
        <hr className="my-2" />
        <br></br>
        <div>
          <Button className="btn-circle btn-xl" color="primary">START</Button> <br></br>
           <br></br>
            <Button  color="primary">RESET</Button>
            </div>
          </Jumbotron>
          </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default App;
