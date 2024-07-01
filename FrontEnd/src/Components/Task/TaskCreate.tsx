import { FC } from "react";
import { ITaskCreateProps } from "./ITaskCreateProps";

const TaskCreate:FC<ITaskCreateProps> = (props) => {

    const {
        onCancel
    } = props;

    return(
        <div className="row">
        
        <div className="col s4 offset-s4">
          <a className="btn-large waves-effect waves-light red" onClick={onCancel}><i className="material-icons">cancel</i> Cancel</a>
        </div>

        </div>
    )
}
export default TaskCreate;