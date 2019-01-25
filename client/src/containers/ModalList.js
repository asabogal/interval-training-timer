import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Workout from '../components/Workouts/Workout'
import { fetchWorkouts } from '../actions/apiActions'
import { connect } from 'react-redux'

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

  componentWillMount() {
    this.props.fetchWorkouts()
  }

  render() {
    const { workouts } = this.props
    console.log("these are the list props:", this.props)
    return (
      <div>
        <Button outline color="info" size="sm" onClick={this.toggle}>Workouts</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>Workouts</ModalHeader>
          <ModalBody >
          { workouts.map(workout => <Workout key={workout.id} workout={workout}/>)}
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