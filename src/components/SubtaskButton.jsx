import React from 'react';

function SubtaskButton(props) {
    const {toggleInputField,taskId}=props
    return (
        <button onClick={() => toggleInputField(taskId)}>
            + Add Sub Task
          </button>
    );
}

export default SubtaskButton;