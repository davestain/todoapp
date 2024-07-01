import { ITask } from "../../Models/ITask";

export interface ITaskListProps{
    tasks:ITask[];
    onUpdate:any;
}