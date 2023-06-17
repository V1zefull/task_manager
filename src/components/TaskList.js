import React from 'react';
import Task from "./Task";

const TaskList = (props) => {
    return (
        <div>
            <div className="cardHeader">
                {props.status}
            </div>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} onStatusChange={props.onStatusChange} onRemoveTask={props.onRemoveTask}/>
            ))}
        </div>
    );
};

export default TaskList;