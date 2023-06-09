import './Task.css';
import {useState} from "react";

export const Task = function ({task, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [userInput, setUserInput] = useState(task.task);
    const [completed, setCompleted] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id);
    }

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(task.id, userInput);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleCancel = () => {
        setUserInput(task.task);
        setIsEditing(false);
    };

    const handleCheckBoxChange = (e) => {
        setCompleted(e.target.checked);
    }

    if (isEditing) {
        return (
            <form onSubmit={handleSubmit} className="ToDoForm">
                <input className="Input" type="text" value={userInput} onChange={handleChange} />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        );
    } else {
        return (
            <div className={completed ? "DisplayTask Completed" : "DisplayTask"}>
                <div className="DivTask">
                    <input type="checkbox" onChange={handleCheckBoxChange} checked={completed}/>
                    <p>{task.task}</p>
                </div>
                <div className="EditTask">
                    <span onClick={handleEditClick}><i className="fa fa-keyboard-o"></i></span>
                    <span onClick={handleDeleteClick}><i className="fa fa-close"></i></span>
                </div>
            </div>
        );
    }
}