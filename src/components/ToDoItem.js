import React from 'react';

import {Form} from 'react-bootstrap';


function ToDoItem(props){
 
  return(
    <div>
<p>{props.data.description}</p>
<p>{props.data.assigned}</p>
<p>{props.data.difficulty}</p>

<button onClick={() =>{
  props.deleteTask(props.index);
}}> Delete</button>
<Form.Group controlId={'todo-status-' + props.index}>
  <Form.Label>Status</Form.Label>
  <Form.Check
  value={props.data.status}
  type='switch'
  onChange={() =>{
    let newTask = {...props.data};
    newTask.status = !newTask.status;
    props.modifyTask(props.index,newTask);
  }}
  id={'status-switch-' + props.index}
  label={props.data.status}
  />
</Form.Group>
    </div>
  )
}





export default ToDoItem;