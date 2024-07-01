import axios from "axios";
import { FC, createRef, RefObject } from "react";
import { ITaskCreateProps } from "./ITaskCreateProps";

const TaskCreate:FC<ITaskCreateProps> = (props) => {

    const {
        onCancel,
        onCreatedTask
    } = props;

    const taskName  = createRef<HTMLInputElement>();
    const taskDesc  = createRef<HTMLInputElement>();

    const submitTask = (event:any)=>{
        event.preventDefault()

        axios.post('http://localhost:5000/tasks',{
            name: taskName.current?.value,
            description:taskDesc.current?.value,
            status: "new",
        })
        .then(() => {
            event.target.reset();
            onCreatedTask();
            onCancel();
        })
        .catch(err => console.log(err));

    }

    return(
        <div className="row">
        <h1 className="center">Add new task</h1>
            <form className="col s12" onSubmit={submitTask}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id='taskName' ref={taskName} type="text" required/>
                        <label htmlFor="taskName">Task Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id='taskDesc' ref={taskDesc} type="text" />
                        <label htmlFor="taskDesc">Description</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light green" type='submit' name='action'>Add task</button>
                <a className="btn waves-effect waves-light red" onClick={onCancel} style={{marginLeft:"30px"}}> Cancel</a>
            </form>
        </div>
    )
}
export default TaskCreate;