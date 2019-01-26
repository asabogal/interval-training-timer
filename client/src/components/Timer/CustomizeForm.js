import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { createWorkout } from '../../actions/apiActions'

import { connect } from 'react-redux'

class CustomizeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      name: '',
      sets: 0,
      running_sets: 0,
      interval: 0,
      rest: 0,
      running: false,
      running_time: 0
      };
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createWorkout(this.state)
    this.props.setCustomSettings(this.state)
    this.props.toggle()
  }

  render() {
    return (
      <div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label >Workout Name</Label>
              <Input onChange={this.handleChange} 
              name="name"
              value={this.state.name}
              bsSize="sm"
              required />
            </FormGroup>
            <FormGroup>
              <Label >Number of Sets</Label>
              <Input onChange={this.handleChange} 
              type="number"
              min="1"
              name="sets"
              value={this.state.sets}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Interval Length (secs)</Label>
              <Input onChange={this.handleChange}
              type="number"
              min="3"
              max="60" 
              name="interval"
              value={this.state.interval}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Rest Length (secs)</Label>
              <Input onChange={this.handleChange}
              type="number"
              min="3"
              max="60" 
              name="rest"
              value={this.state.rest}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              
              <Input type="submit" value="Update Settings" bsSize="sm"></Input>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { createWorkout })(CustomizeForm);