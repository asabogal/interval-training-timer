import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

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

    console.log(this.state)
  }

  render() {

  
    return (
      <div>
          <Form >
            <FormGroup>
              <Label >Workout Name</Label>
              <Input onChange={this.handleChange} 
              name="name"
              value={this.state.name}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Number of Sets</Label>
              <Input onChange={this.handleChange} 
              name="sets"
              value={this.state.sets}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Interval Length</Label>
              <Input onChange={this.handleChange} 
              name="interval"
              value={this.state.interval}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Rest Length</Label>
              <Input onChange={this.handleChange} 
              name="rest"
              value={this.state.rest}
              bsSize="sm" />
            </FormGroup>
            <FormGroup>
              
              <Input type="submit"  bsSize="sm"></Input>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CustomizeForm;