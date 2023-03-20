import React from 'react';

function ToBeCompletedTask(props) {
    const {taskId,subtasks,handleCheckboxClick}=props
    return (
        <div>
             
              <div key={taskId}>
                <h3>To be Completed</h3>

                <ul>
                  {subtasks
                    .filter((subtask) => !subtask.isCompleted)
                    .map((subtask) => (
                      <li
                        key={subtask._id}
                        onClick={() =>
                          handleCheckboxClick(taskId, subtask._id)
                        }
                      >
                        <label>{subtask.title}</label>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
    );
}

export default ToBeCompletedTask;