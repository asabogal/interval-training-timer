import React, { Component } from 'react';
import { Jumbotron, Button, Container, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
        <p className="lead">Hi Intensity</p>
        <Container className="container-bg">
          <Col>
          <h1 className="display-1">00:30</h1>
          </Col>
        </Container>
        
       
        <span>Time Elapsed</span> <span>Time Remaining</span> <br></br>
        <span className="text-center">1:20</span> <span>10:20</span>
       
        <hr className="my-2" />
        <div>
          <Button className="btn-circle btn-xl" color="primary">START</Button> <br></br>
          <br></br>
          <Button  color="primary">RESET</Button>
        </div>
      </Jumbotron>
        
      </div>
    );
  }
}

export default App;
