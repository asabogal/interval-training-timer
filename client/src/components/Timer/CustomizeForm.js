import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const CustomizeForm = () => {
  return (
    <div>
        <Form>
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
      </Form>
    </div>
  );
};

export default CustomizeForm;