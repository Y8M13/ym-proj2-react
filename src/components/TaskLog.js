// import React from 'react';
import React, { useEffect, useState } from 'react';


const TaskLog = () => {
  useEffect(() => {
    fetchTaskers();
  },[]);

  const [taskers, setTaskers] = useState([]);


  const fetchTaskers = async () => {
    const data = await fetch( 'http://localhost:4000/taskers' );

    const taskers = await data.json();
    console.log(taskers);
    setTaskers(taskers);

  }

  return (
    <div>TaskLog</div>
  )
}

export default TaskLog;