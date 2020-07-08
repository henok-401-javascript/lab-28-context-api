import React from 'react';
import ToDoForm from './ToDoForm';
import {Container} from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import ToDoList from './ToDoList';

function ToDo(){
const {setRequest , response} = useFetch({
  url:'https://todo-server-401n16.herokuapp.com/api/v1/todo',
});

async function addTask(taskDetails){

  await setRequest({
    url:'https://todo-server-401n16.herokuapp.com/api/v1/todo',
    method:'POST',
    body:taskDetails,
    runGet:'https://todo-server-401n16.herokuapp.com/api/v1/todo',
  });
}

async function modifyTask(index , updateTask){
  await setRequest({
    url:'https://todo-server-401n16.herokuapp.com/api/v1/todo' + response[index]._id,
    method:'PUT',
    body:updateTask,
    runGet:'https://todo-server-401n16.herokuapp.com/api/v1/todo',
  })
}
async function deleteTask(index){
  await setRequest({
    url:'https://todo-server-401n16.herokuapp.com/api/v1/todo' + response[index]._id,
    method:'DELETE',
    runGet:'https://todo-server-401n16.herokuapp.com/api/v1/todo',
  })
}

  return(

<Container>

<ToDoForm addTask={addTask}/>

<ToDoList 
tasks={response}
modifyTask={modifyTask}
deleteTask={deleteTask} />
</Container>
  );
}
export default ToDo;