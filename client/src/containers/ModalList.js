import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { fetchWorkouts } from '../actions/apiActions'
import { connect } from 'react-redux'
import WorkoutList from '../components/Workouts/WorkoutList';

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
    const { workouts, setCustomSettings, fetchWorkouts } = this.props
   
    return (
      <div>
        <Button outline color="info" size="sm" onClick={this.toggle}>Workouts</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Workouts</ModalHeader>
          <ModalBody >
           <WorkoutList workouts={workouts} setCustomSettings={setCustomSettings} fetchWorkouts={fetchWorkouts} toggle={this.toggle} /> 
          </ModalBody>
          <ModalFooter >
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps, {fetchWorkouts})(ModalList);