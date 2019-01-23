import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import ModalForm from '../../containers/ModalForm'

const TimerSettings = (props) => {

  const { setHighIntensity, setLowIntensity } = props

  return (
    <Container>
      <Row>
        <Col>
          <Button outline color="info" size="sm" onClick={setHighIntensity}>High Intensity</Button>
          <Button outline color="info" size="sm" onClick={setLowIntensity}>Low Intensity</Button>
          <ModalForm/>
        </Col>
      </Row>
      <hr className="my-2" />
    </Container>
  );
};

export default TimerSettings;