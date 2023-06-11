import React, {useState} from 'react';
import TaskList from "./TaskList";

const TASK_STATUSES = ["Planned", "In Progress", "Completed"]

const TaskPage = (props) => {
    const [cardForm, showCardForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const formToggle = () => {
        showCardForm(!cardForm);
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        showCardForm(false);
    }

    const onCreateTask = (e) => {
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        });
        resetForm();
    }

    const renderTaskLists = () => {
        const {tasks} = props;
        return TASK_STATUSES.map((status, id) => {
            const statusTasks = tasks.filter(task => task.status === status)
            return(
                <div key={id} className="col-md-3 card m-2 p-0 text-center" style={{background:"#FFDCBC"}}>
                    <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={props.onStatusChange} onRemoveTask={props.onRemoveTask}/>
                </div>
            );

        })
    }

    return (
        <div className="container my-5">
            <div className="jumbotron py-3">
                <div className="row rounded-pill" style={{background: "#FFE9B8"}}>
                    <div className="col-md-2">
                        <button className="btn btn-success m-3" onClick={formToggle} style={{background:"#A9EBB8", border:"none", color:"black"}}>Add</button>
                    </div>
                    <div className="col-md-8">
                        <h2 className="display-4 text-center text-uppercase">
                            Task Manager
                        </h2>
                    </div>
                </div>
                {/*Inputs Form*/}
                {cardForm && (
                    <form onSubmit={onCreateTask}>
                        <div className="form-group m-3">
                            <input type="text" className="form-control" placeholder="Title" onChange={onChangeTitle}/>
                        </div>
                        <div className="form-group m-3">
                            <textarea type="text" className="form-control" placeholder="Description" onChange={onChangeDescription}/>
                        </div>
                        <button type="submit" className="btn btn-primary m-3" style={{background: "#A3D6E0"}}>Submit</button>
                    </form>
                )}
            </div>
            <div className="d-flex justify-content-center position-relative m-3">
                {renderTaskLists()}
            </div>
        </div>
    );
};

export default TaskPage;