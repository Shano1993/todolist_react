import './App.css';
import {useState} from "react";
import {Header} from "../Header/Header";
import {ToDoList} from "../ToDoList/ToDoList";
import {ToDoForm} from "../ToDoForm/ToDoForm";

function App() {
    const [toDoList, setToDoList] = useState([])
    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
        setToDoList(copy);
    }

    const handleDeleteTask = (taskId) => {
        setToDoList((prevList) => prevList.filter((task) => task.id !== taskId))
    }

    const editTask = (taskId, userInput) => {
        setToDoList((prevList) =>
            prevList.map((task) =>
                task.id === taskId ? { ...task, task: userInput } : task
            )
        );
    };

    return (
        <div className="App">
            <Header />
            <ToDoForm addTask={addTask}/>
            <div className="Task">
                <ToDoList toDoList={toDoList} onDeleteTask={handleDeleteTask} onEditTask={editTask}/>
            </div>
        </div>
    );
}

export default App;
