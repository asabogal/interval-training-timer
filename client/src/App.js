import React, { Component } from 'react';
import Timer from './containers/Timer'
import './App.css';
import { Container, Jumbotron } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
        <div className="App">
          <Timer/>
        </div>
        </Jumbotron>
      </Container>
      
    );
  }
}

export default App;
