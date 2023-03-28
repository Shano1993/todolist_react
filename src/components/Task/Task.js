import './Task.css';

export const Task = function ({task}) {
    return (
        <div className="DisplayTask">
            <div className="DivTask">
                <input type="checkbox"/>
                <p>{task.task}</p>
            </div>
            <div className="EditTask">
                <span><i className="fa fa-keyboard-o"></i></span>
                <span><i className="fa fa-close"></i></span>
            </div>
        </div>
    )
}