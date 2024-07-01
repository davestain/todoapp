import * as React from 'react';
import { ITaskListProps } from './ITaskListProps';
import { ITask } from "../../Models/ITask";
import axios from 'axios';


const TaskList:React.FC<ITaskListProps> = (props) => {

    const {
        tasks,
        onUpdate
    } = props;


    const apiUrl = 'http://localhost:5000/task';
    const startTask = (id:string) => {
        axios.put(`${apiUrl}/${id}`,{status:"inprogress"})
        .then(() => {
            onUpdate();
        })
        .catch(err => console.log(err));
    }

    const deleteTask = (id:string) => {
        axios.delete(`${apiUrl}/${id}`)
        .then(() => {
            onUpdate();
        })
        .catch(err => console.log(err));
    }

    return(
        <div>
            
            <span>this app is running on {import.meta.env.MODE}</span>
            {
                tasks.length> 0?
            <ul className="collection with-header">
                <li className="collection-header"><h4>To Do Items</h4></li>
                    {tasks.map((task:ITask) => (
                        <li className='collection-item avatar' key={task._id}>
                            <i className={`material-icons circle ${task.status === 'new'?'blue':task.status === 'inprogress'?'yellow':'green'}`}>{task.status === 'new'?'new_releases':task.status === 'inprogress'?'pending_actions':'task'}</i>
                            <span className="title">{task.name}</span>
                            <p>
                                {task.description} {task._id}
                            </p>
                            <a href="#!" className="btn-floating btn-small waves-effect waves-light secondary-content red" onClick={() => {deleteTask(task._id)}}><i className="material-icons">delete</i></a><br/>
                            <a href="#!" className="btn-floating btn-small waves-effect waves-light secondary-content" onClick={() => {startTask(task._id)}} style={{right:"60px"}}><i className="material-icons">edit</i></a>
                        </li>
                    ))}
            </ul>
            : <div className="card-panel teal lighten-2"><span>There are no tasks to display yet </span><i className="material-icons">search</i></div>
            }
        </div>
    )
}

export default TaskList;