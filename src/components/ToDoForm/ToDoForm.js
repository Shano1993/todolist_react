import './ToDoForm.css';
import {useState} from "react";

export const ToDoForm = function ({addTask}) {
    const [userInput, setUserInput] = useState('');

    function handleSubmit(e) {
        addTask(userInput);
        setUserInput("");
    }

    return (
        <div className="ToDoForm">
            <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}