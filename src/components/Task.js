import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TASK_STATUSES = ["Planned", "In Progress", "Completed"]

const Task = (props) => {

    function onStatusChange(e){
        props.onStatusChange(props.task.id, e.target.value)
    }

    function onRemoveTask() {
        props.onRemoveTask(props.task.id)
    }

    return (
        <>

            <div className="card">
                <form onChange={onStatusChange}>
                    <select defaultValue={props.task.status}>
                        {TASK_STATUSES.map(status => (
                            <option value={status} key={status}>{status}</option>
                        ))}
                    </select>
                </form>
                <h2 className="cardTitle">{props.task.title}</h2>
                <p className="cardText">{props.task.description}</p>
                <FontAwesomeIcon icon={faTrash} className="trashIcon" style={{color: "#d76565", cursor:"pointer"}} onClick={() => onRemoveTask(props.task.id)}/>
            </div>
        </>
    );
};

export default Task;