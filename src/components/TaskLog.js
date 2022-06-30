// import React from 'react';
import React, { useState, useEffect } from 'react';
import TaskForm from "./TaskForm";
// import TaskCard from "./components/TaskCard.js";


const TaskLog = (props) => {
  
  const [taskers, setTaskers] = useState([]);
  // const [todos, setTodos] = useState([]);  // setting state inorder for a change
  
  useEffect(() => {            //used for fetching data
    fetchTaskers();
  }, []);
  
  const fetchTaskers = async () => {
    const data = await fetch( 'http://localhost:4000/taskers' );
    
    const taskers = await data.json();
    console.log(taskers);
    setTaskers(taskers);  // how the state is updated
    
  //   const todos = taskers.map(tasker => <li>{ tasker }</li>)
     
    }
  
  return (
    <div>
      <h1>Task Log</h1>
        {taskers.map(tasker => (
          <>
           <h2 key={ tasker.id }>{ tasker.date },  { tasker.name }, { tasker.deadline }, { tasker.comments }</h2> 
           {/* <h2 key={ tasker.id }>{ tasker.date } </h2> 
           <h2 key={ tasker.id1 }>{ tasker.name } </h2> 
           <h2 key={ tasker.id2 }>{ tasker.deadline } </h2> 
           <h2 key={ tasker.id3 }>{ tasker.comments } </h2>   */}
          </>
          ))
          
        // {TaskForm} 
        }
        
          {/* { todos } */}
    
    </div>
  );


}

export default TaskLog;



/**************Extra Code that I may use ***********/

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

//Working code to pull values from form//
  // const submitForm(e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/taskers", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify( {TaskForm } ),
  //   });
  //   }


//**** Just here for possible reference... DELETE!!!! */
// const submitForm = e => {
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

//     // renderTaskLogPage();     I wont need this line...
//   })