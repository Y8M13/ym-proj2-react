// import React from 'react';
import React, { useEffect, useState } from 'react';


const TaskLog = () => {
  useEffect(() => {
    fetchTaskers();
  },[]);
  
  const [taskers, setTaskers] = useState([]);
  const [todos, setTodos] = useState([]);
  
  
  const fetchTaskers = async () => {
    const data = await fetch( 'http://localhost:4000/taskers' );
    
    const taskers = await data.json();
    console.log(taskers);
    setTaskers(taskers);
    
    // const todos = taskers.map(tasker => <li>{ tasker }</li>)
     
    
  }
  
  return (
    <div>
      <h1>Task Log</h1>
      {taskers.map(tasker =>(
        <h2 key={ tasker.id }>{ tasker.date }</h2> 
        ))}
      { todos }
    </div>
  )
}

export default TaskLog;