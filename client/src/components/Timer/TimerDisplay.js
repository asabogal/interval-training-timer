import React from 'react';
import { Container, Row, Col, Progress } from 'reactstrap'
// import TimerBar from '../../containers/TimerBar'

const TimerDisplay = (props) => {

  const {
    name,
    sets, 
    runningSets,
    interval,
    rest,
    runningTime,
    totalTime} = props

  const renderTimer = (interval, rest) => {
      if (rest > 0) {
        return renderRest(rest)
      } else if (rest === 0) {
        return renderInterval(interval)
      } else {
        return <h3>--</h3>
      }
    }
    
  const renderRest = (rest) => {
      let minutes = Math.floor(rest / 60)
      let seconds = rest - (minutes * 60)
    
      if (seconds < 10) {
        return <h1 className="display-2">0{minutes}:0{seconds}</h1>
      } else {
        return <h1 className="display-2">0{minutes}:{seconds}</h1>
      }
    }
    
  const renderInterval = (interval) => {
      let minutes = Math.floor(interval / 60)
      let seconds = interval - minutes * 60
    
      if (seconds < 10) {
        return <h1 className="display-1">0{minutes}:0{seconds}</h1>
      } else {
        return <h1 className="display-1">0{minutes}:{seconds}</h1> 
      }
    }
    
   const renderRunningTime = (runningTime) => {
      let minutes = Math.floor(runningTime / 60)
      let seconds = runningTime - minutes * 60
    
        if (seconds < 10) {
          return <p>0{minutes}:0{seconds}</p>
        } else {
          return <p>0{minutes}:{seconds}</p>
        }
    } 

  return (
    <Container className="container-bg">
      <Row>
        <Col>
        <h5>{name}</h5>
        Set {runningSets + 1}/{sets}
        {renderTimer(interval, rest)}
        Elapsed
        {renderRunningTime(runningTime)}
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
        <Progress animated value={runningTime} max={totalTime} color="red"/>
        </div>
        
        {/* <TimerBar runningTime={runningTime} totalTime={totalTime}/> */}
        </Col>
      </Row>
    </Container>
  );
};

export default TimerDisplay;