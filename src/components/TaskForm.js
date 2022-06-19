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
          <input type="text" date="date" id="date" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label>Deadline</label>
          <input type="text" deadline="deadline" id="deadline" />
        </div>
        <div>
          <label>Comments</label>
          <input type="text" comments="comments" id="comments" />
        </div>
        <br/>
          <button onClick={ handleSubmit }>
            Submit
          </button>
        </form>
    </div>
  )
}

export default TaskForm;