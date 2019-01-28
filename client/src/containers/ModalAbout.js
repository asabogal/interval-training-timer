import React from 'react';
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import About from '../components/About'

class ModalAbout extends React.Component {
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
       <Link className="App-link" to="/" color="info" onClick={this.toggle}>About</Link>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Interval Trainig Timer</ModalHeader>
          <ModalBody >
            <About/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalAbout;