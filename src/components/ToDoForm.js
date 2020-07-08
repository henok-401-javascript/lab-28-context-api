import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import useForm from '../hooks/useForm';

function ToDoForm(props){

 const [updateForm , submit , data] = useForm(props.addTask);

return(
  <div>
       <Form onSubmit={submit}>

<Form.Group controlId="ToDo-description">
  <Form.Label>Task Description</Form.Label>
  <Form.Control 
  type="text" 
  rows='3'
  onChange={(e) =>{
    updateForm('description' , e.target.value);
  }}
  />
</Form.Group>
<Form.Group controlId="ToDo-assigned">
  <Form.Label>Assigned To</Form.Label>
  <Form.Control 
  type="text" 
  onChange={(e) =>{
    updateForm('assigned',e.target.value);
  }}
  
  />
</Form.Group>

<Form.Group controlId="ToDo-status">
<Form.Label> Status</Form.Label>
  <Form.Check 
  onChange={(e) =>{
    updateForm('status' , e.target.checked);
  }}
  type="switch" 
  id='status -switch'
    label={data.status ? 'complete' : 'Incomplete'} 
  
  />
</Form.Group>


<Form.Group controlId="formBasicRange">
  <Form.Label>Difficulty</Form.Label>
  <Form.Control 
  type="range"
  step={1}
  min={0}
  max={5}
  onChange={(e) =>{
    updateForm('difficulty' , e.target.value);
  }}
  />
</Form.Group>

<Button variant="primary" type="submit" >
  Submit
</Button>

</Form>
  </div>
);

}

export default ToDoForm;