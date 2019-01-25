import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../../containers/ModalForm'
import ModalList from '../../containers/ModalList'

const TimerSettings = (props) => {

  const { setCustomSettings } = props

  return (
    <Container>
      <Row>
        <Col>
          <ModalList setCustomSettings={setCustomSettings}/>
          <ModalForm setCustomSettings={setCustomSettings}/>
        </Col>
      </Row>
      <hr className="my-2" />
    </Container>
  );
};

export default TimerSettings;