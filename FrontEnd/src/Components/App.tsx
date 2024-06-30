import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import TaskCreate from './Task/TaskCreate';
import TaskList from './Task/TaskList';

const App:React.FC = () => {
  const [taskList, setTaskList] = useState([])

  const apiUrl = import.meta.env.VITE_API_URL||'http://localhost:5000/tasks';

  useEffect(() => {
    axios.get(apiUrl)
    .then(response => {
      setTaskList(response.data)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo center">Task Manager</a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s6 offset-s3"><TaskList tasks={taskList}/></div>
      </div>
      <div className="row">
        <div className="col s12"><TaskCreate /></div>
      </div>

    </div>
  )
}

export default App
