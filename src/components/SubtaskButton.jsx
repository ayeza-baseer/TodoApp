import React from 'react';

function SubtaskButton(props) {
    const {toggleInputField,taskId,index}=props
    return (
        <button disabled={index==taskId} className='taskButton' onClick={() => toggleInputField(taskId)}>
            + Add new Sub Task
          </button>
    );
}

export default SubtaskButton;