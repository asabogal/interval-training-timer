import React from 'react';
import { Container, Button } from 'reactstrap'

const TimerControls = (props) => {

  const { handleStartStop, handleResetTimer, running } = props

  return (
    <Container>
      <hr className="my-2" />
      <div>
      <Button className="btn-circle btn-xl" outline color="info" onClick={handleStartStop}>{running ? 'PAUSE' : 'START'}</Button>
      </div>
      <br></br>
      <div>
      <Button outline color="info" onClick={handleResetTimer}>Reset</Button>
      </div>
      
    </Container>
  );
};

export default TimerControls;