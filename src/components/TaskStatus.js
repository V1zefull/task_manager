import React from 'react';

const TaskStatus = (props) => {
    return (
        <div>
            <div className="cardHeader">
                {props.status}
            </div>
        </div>
    );
};

export default TaskStatus;