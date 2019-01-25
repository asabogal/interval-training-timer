import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Workout from '../components/Workouts/Workout'

class ModalList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button outline color="info" size="sm" onClick={this.toggle}>Workouts</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Workouts</ModalHeader>
          <ModalBody >
            <Workout setCustomSettings={this.props.setCustomSettings} toggle={this.toggle} />
            <Workout setCustomSettings={this.props.setCustomSettings} toggle={this.toggle} />
          </ModalBody>
          <ModalFooter >
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalList;