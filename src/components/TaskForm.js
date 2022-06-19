import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("You clicked a button.");
}

const TaskForm = () => {
  return (
    <div className="container">
      <h1>Today's Plan of Action</h1>
      <form>
        <div>
          <label>Date</label>
          <input type="text" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Deadline</label>
          <input type="text" />
        </div>
        <div>
          <label>Comments</label>
          <input type="text" />
        </div>
        <br/>
          <input onClick= { handleSubmit } type="submit" value="Create Tasker" />
          {/* <button onClick={ handleSubmit }>
            Submit
          </button> */}     
        </form>
    </div>
  )
}

export default TaskForm;