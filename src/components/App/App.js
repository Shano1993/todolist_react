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
    return (
        <div className="App">
            <Header />
            <ToDoForm addTask={addTask}/>
            <div className="Task">
                <ToDoList toDoList={toDoList}/>
            </div>
        </div>
    );
}

export default App;
