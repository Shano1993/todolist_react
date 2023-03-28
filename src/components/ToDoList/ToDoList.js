import './ToDoList.css';
import {Task} from "../Task/Task";

export const ToDoList = function ({toDoList}) {
    return (
        <div className="ToDoList">
            {toDoList.map(task => {
                return (
                    <Task task={task}/>
                )
            })}
        </div>
    )
}