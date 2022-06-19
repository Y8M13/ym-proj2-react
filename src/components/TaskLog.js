// import React from 'react';
import React, { useEffect, useState } from 'react';

// const TaskLog = () => {
//   const [taskers, setTaskers ] = useState([])

//     useEffect(() => {            //used for fetching data
//       fetch( 'http://localhost:4000/taskers' )
//             .then(resp => resp.json())
//             .then(taskers => setTaskers(taskers))
//     },[]);

//     const addTasker = (tasker) => {

//     fetch( 'http://localhost:4000/taskers', {
//      method: "POST",
//      headers:{
//          'Accept': "application/json",
//          'Content-Type': "application/json"
// },
//      body: JSON.stringify( tasker )
// })
//      .then(resp => resp.json())
//      .then( tasker => {
//        const newTaskers = { ...taskers, tasker};
//        setTaskers(newTaskers);
//        console.log(tasker);
//     })





const TaskLog = () => {
  useEffect(() => {            //used for fetching data
    fetchTaskers();
  },[]);
  
  const [taskers, setTaskers] = useState([]);
  // const [todos, setTodos] = useState([]);  // setting state inorder for a change
  
  
  const fetchTaskers = async () => {
    const data = await fetch( 'http://localhost:4000/taskers' );
    
    const taskers = await data.json();
    console.log(taskers);
    setTaskers(taskers);  // how the state is updated
    
    const todos = taskers.map(tasker => <li>{ tasker }</li>)
     
    
  }
  
  return (
    <div>
      <h1>Task Log</h1>
      {taskers.map(tasker =>(
        <h2 key={ tasker.id }>{ tasker.date }</h2> 
        ))}
      {/* { todos } */}
    </div>
  )
// }

// const submitFormEvent = e => {
//   e.preventDefault();                                                     
  

//   console.log("date", dateInput().value)
//   console.log("name", nameInput().value)
//   console.log("deadline", deadlineInput().value)
//   console.log("comments", commentsInput().value)
//   fetch("http://localhost:4000/taskers", {
//       method: "POST",
//       headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//           date: dateInput().value,
//           name: nameInput().value,
//           deadline: deadlineInput().value,
//           comments: commentsInput().value
//       })
//   })
//   .then(resp => resp.json())
//   .then(tasker => {
//     console.log(tasker)  
//     // renderTaskLogPage();
//   })
}

export default TaskLog;