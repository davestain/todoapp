import {
    addNewTask,
    getTasks,
    updateTask,
    deleteTask
 } from "../controllers/taskController";

 const routes = (app) => {
    app.route('/tasks')
    .get(getTasks)
    .post(addNewTask)

    app.route('task/:TaskId')
    .put(updateTask)
    .delete(deleteTask)
 };

 export default routes;