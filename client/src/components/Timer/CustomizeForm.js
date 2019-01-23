import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class CustomizeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }


  render() {

    console.log(this.props)
    return (
      <div>
          <Form >
            <FormGroup>
              <Label >Workout Name</Label>
              <Input  bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Number of Sets</Label>
              <Input  bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Interval Length</Label>
              <Input  bsSize="sm" />
            </FormGroup>
            <FormGroup>
              <Label >Rest Length</Label>
              <Input  bsSize="sm" />
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