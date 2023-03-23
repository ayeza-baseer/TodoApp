import React from 'react';


function TaskButton(props) {
    const {toggleInputTask,showInput}=props
    return (
        <button disabled={showInput}className="taskButton" onClick={() => toggleInputTask()}>+ Add New Task</button>
    );
}

export default TaskButton;