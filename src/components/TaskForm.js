import React from 'react';
import { useState } from 'react';


const TaskForm = () => {
    
  //State//  
  const [date, setDate] = useState('');  //used for the input values updates/changes (empty string)
  const [name, setName] = useState(''); 
  const [deadline, setDeadline] = useState(''); 
  const [comments, setComments] = useState(''); 


  /*Event Handlers*/
  const changeDate = (e) => {   //receives the default event (e) object and captures the value of the change event
    setDate(e.target.value)
  }
  console.log(date)     //used to log the tracked changes in the console due to the input change handler

  const changeName = (e) => {    
    setName(e.target.value)
  }
  console.log(name)     

  const changeDeadline = (e) => { 
    setDeadline(e.target.value)    //this is the user input;  I now haves access to this value on the event target
  }
  console.log(deadline)  

  const changeComments = (e) => {   
    setComments(e.target.value)
  }
  console.log(comments)     

/*Form*/  
// const handleSubmit = (e) => {   
const taskFormSubmitter = (e) => {   //this event is passed into the function since it is bound to the onSubmit
  e.preventDefault();           //to stop the default refresh inorder to avoid page reload and loss of state
  console.log("you have clicked a button.")

  fetch("http://localhost:4000/taskers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify( {date, name, deadline, comments} ),
  })
  
}

  return (
    <div className="container">
      <h1>Today's Plan of Action</h1>
        {/* <form onSubmit = { handleSubmit }> */}
        <form onSubmit = { taskFormSubmitter }>
          <div>
            <label>Date</label>
            <input type="text" date="date" id="date" value={ date } onChange={ changeDate }/>   
            {/* <input type="text" date="date" id="date" value={ formData.date } onChange={ changeDate }/>   Used to match the values to the formData state */}
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" id="name" value={ name } onChange={ changeName } />
            {/* <input type="text" name="name" id="name" value={ formData.name } onChange={ changeName } /> */}
          </div>
          <div>
            <label>Deadline</label>
            <input type="text" deadline="deadline" id="deadline" value={ deadline } onChange={ changeDeadline } />
            {/* <input type="text" deadline="deadline" id="deadline" value={ formData.deadline } onChange={ changeDeadline } /> */}
          </div>
          <div>
            <label>Comments</label>
            <input type="text" comments="comments" id="comments" value={ comments } onChange={ changeComments }/>
            {/* <input type="text" comments="comments" id="comments" value={ formData.comments } onChange={ changeComments }/> */}
          </div>
        <br/>
          {/* <input onClick= { handleSubmit } type="submit" value="Create Task" /> */}
          {/* <button onClick={ handleSubmit }>
            Submit
          </button> */} 
          <button type="submit" value="Create Task">Create Task</button>    
        </form>
    </div>
  )
}

export default TaskForm;




/*******Extra code to possibly delete the**********/
// useEffect( () => {
  //    fetch("http://localhost:4000/taskers", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(taskFormSubmitter),
  //  })
  // })

  
// const addTasker = (tasker) => {

  //  fetch("http://localhost:4000/taskers", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(tasker),
  //  })
    
  //    .then(resp => resp.json())
  //    .then( tasker => {
  //      const newTaskers = { ...taskers, tasker};
  //      setTaskers(newTaskers);
  //      console.log(tasker);
  //   })

  //***** Duplicate Code -- DELETE!!! these lines of Event Handlers */
  // /*Event Handler*/
  // const changeDate = (e) => {   //receives the default event (e) object and captures the value of the change event
  //   setDate(e.target.value)
  // }
  // console.log(date)     //used to store the tracked changes in the console due to the input change handler

  // const changeName = (e) => {    
  //   setName(e.target.value)
  // }
  // console.log(name)     

  // const changeDeadline = (e) => { 
  //   setDeadline(e.target.value)    //this is the user input that gives access to this value on the event target
  // }
  // console.log(deadline)  

  // const changeComments = (e) => {   
  //   setComments(e.target.value)
  // }
  // console.log(comments)     


// console.log(formData)   used to track the changes for the formData changes

//  }).then(() => {
  // // //      const newTasker = { ...taskers, tasker};
  //       setDate(newTasker);
  //       setName(newTasker);
  //       setDeadline(newTasker);
  //       setComments(newTasker);

  //     // console.log(newTasker);
  //     // console.log('new task added');
  //  })

  // console.log(date);
  // console.log(name);
  // console.log(deadline);
  // console.log(comments);

  //***** Duplicate Code -- DELETE!!! these lines of state */
// const TaskForm = (props) => {
//   /*State*/
//   const [date, setDate] = useState('');  //state used for the input field with empty string
//   const [name, setName] = useState(''); 
//   const [deadline, setDeadline] = useState(''); 
//   const [comments, setComments] = useState(''); 


  /*An easier way used to create one bucket to capture state
  const [formData, setFormData] = useState({
    date:'', 
    name:'', 
    deadline:'';
    comments:'';
  })*/
