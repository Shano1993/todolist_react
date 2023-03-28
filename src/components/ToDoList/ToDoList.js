import './ToDoList.css';
import {Task} from "../Task/Task";

export const ToDoList = function ({toDoList, onDeleteTask, onEditTask}) {
    const handleDelete = (taskId) => {
        onDeleteTask(taskId);
    }

    const handleEdit = (taskId, userInput) => {
        onEditTask(taskId, userInput);
    };

    return (
        <div className="ToDoList">
            {toDoList.map(task => {
                return (
                    <Task key={task.id} task={task} onDelete={handleDelete} onEdit={handleEdit}/>
                )
            })}
        </div>
    )
}