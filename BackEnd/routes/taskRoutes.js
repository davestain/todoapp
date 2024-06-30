import {
    addNewTask,
    getTasks,
    updateTask,
    deleteTask
 } from "../controllers/taskController.js";

 const routes = (app) => {
    app.route('/tasks')
    .get(getTasks)
    .post(addNewTask)

    app.route('task/:TaskId')
    .put(updateTask)
    .delete(deleteTask)
 };

 export default routes;