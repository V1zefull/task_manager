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
                <div key={id} className="taskCard" style={{background:"#FFDCBC"}}>
                    <TaskList key={status} status={status} tasks={statusTasks} onStatusChange={props.onStatusChange} onRemoveTask={props.onRemoveTask}/>
                </div>
            );

        })
    }

    return (
        <div className="container">
            <div className="headerContainer">
                <div className="navBar">
                    <button className="navBtn" onClick={formToggle}>Add</button>
                    <h2>Task Manager</h2>
                </div>
                {/*Inputs Form*/}
                {cardForm &&
                    <div className="createForm">
                        <form onSubmit={onCreateTask} className="createFormContainer">
                            <h2>Create task</h2>
                            <div>
                                <h3>Title</h3>
                                <input type="text" className="taskInput" onChange={onChangeTitle}/>
                            </div>
                            <h3>Description</h3>
                            <div className="taskInput">
                                <textarea className="taskInputDesc" onChange={onChangeDescription}/>
                            </div>
                            <button type="submit"  className="subBtn">Submit</button>
                        </form>
                    </div>
                }
            </div>
            <div className="taskListContainer">
                {renderTaskLists()}
            </div>
        </div>
    );
};

export default TaskPage;