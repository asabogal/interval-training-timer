import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CustomizeForm from '../components/Timer/CustomizeForm'

class ModalForm extends React.Component {
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
        <Button outline color="info" size="sm" onClick={this.toggle}>Customize</Button>
        <Modal  isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader  toggle={this.toggle}>New Workout</ModalHeader>
          <ModalBody >
            <CustomizeForm />
          </ModalBody>
          <ModalFooter r>
            <Button color="primary" onClick={this.toggle}>Save?</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;