import React from 'react';


function TaskButton(props) {
    const {toggleInputTask}=props
    return (
        <button onClick={() => toggleInputTask()}>+ Add Task</button>
    );
}

export default TaskButton;