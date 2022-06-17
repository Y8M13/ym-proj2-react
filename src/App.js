// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import TaskLog from './components/TaskLog.js';
import TaskDetails from './components/TaskDetails.js';
import TaskForm from './components/TaskForm.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar /> 
        <Switch>
        <Route path="/" exact component={ Home }/> 
        <Route path="/tasklog" exact component={ TaskLog } /> 
        <Route path="tasklog/:id" component={ TaskDetails } /> {/*allows for additional info page*/}
        <Route path="/taskform" exact component={ TaskForm } /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
