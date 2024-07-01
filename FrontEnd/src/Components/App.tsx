import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import TaskCreate from './Task/TaskCreate';
import TaskList from './Task/TaskList';

const App:React.FC = () => {
  const [taskList, setTaskList] = useState([])
  const [addNewItem, setAddNewItem] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL||'http://localhost:5000/tasks';

  useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      setTaskList(response.data);
      console.log(response.data);
    })
    .catch(err => console.log(err));
  }, []);

  const toggleAdd = () => {
    setAddNewItem((addNewItem) => !addNewItem);
  }

  const updateTasks = ()=>{
    axios.get(apiUrl)
    .then(response => {
      setTaskList(response.data)
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1 sticky">
            <a href="/" className="brand-logo center">To Do App</a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s6 offset-s3"><TaskList tasks={taskList} onUpdate={updateTasks}/></div>
      </div>
      <div className="row">
      {addNewItem?
        <div className="col s12">
          <TaskCreate onCancel={toggleAdd} onCreatedTask={updateTasks}/>
        </div>:
        <div className="col s4 offset-s4">
          <a className="btn-large waves-effect waves-light blue" onClick={toggleAdd}><i className="material-icons">add</i>Add a task</a>
        </div>
        }
      </div>

    </div>
  )
}

export default App
