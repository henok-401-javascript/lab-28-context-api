import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props){
let items = [];

console.log('from todo item',items);
if(props.tasks)
for(let i = 0; i < props.tasks; i++)
  items.push(
    <ToDoItem 
    key={i}
    index={i}
    data={props.tasks[i]}
    deleteTask={props.deleteTask}
    modifyTask={props.modifyTask}
    
    />,
  );



  return(
    <div>
      <h1>Tasks</h1>
      {items}
    </div>
  )

}
export default ToDoList;
