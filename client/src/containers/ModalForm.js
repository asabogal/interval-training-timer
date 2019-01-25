import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
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
          <ModalHeader  toggle={this.toggle}>Customize Settings:</ModalHeader>
          <ModalBody >
            <CustomizeForm setCustomSettings={this.props.setCustomSettings} toggle={this.toggle} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;