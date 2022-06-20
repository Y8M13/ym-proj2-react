import React from 'react';
import { useState } from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("You clicked a button.");
}

const TaskForm = () => {
  /*State*/
  const [date, setDate] = useState('');  //state used for the input field
  const [name, setName] = useState(''); 
  const [deadline, setDeadline] = useState(''); 
  const [comments, setComments] = useState(''); 

  /*An easier way used to create one bucket to capture the state
  const [formData, setFormData] = useState({
    date:'', 
    name:'', 
    deadline:'';
    comments:'';
  })

  /*Events*/
  const changeDate = (e) => {    //to capture value of the change event
    setDate(e.target.value)
  }
  console.log(date)     //used to display the tracked changes in the console

  const changeName = (e) => {    
    setName(e.target.value)
  }
  console.log(name)     

  const changeDeadline = (e) => { 
    setDeadline(e.target.value)   
  }
  console.log(deadline)  

  const changeComments = (e) => {   
    setComments(e.target.value)
  }
  console.log(comments)     

// console.log(formData)    used to track the changes for the formData changes

  return (
    <div className="container">
      <h1>Today's Plan of Action</h1>
        <form>
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
          <input onClick= { handleSubmit } type="submit" value="Create Task" />
          {/* <button onClick={ handleSubmit }>
            Submit
          </button> */}     
        </form>
    </div>
  )
}

export default TaskForm;