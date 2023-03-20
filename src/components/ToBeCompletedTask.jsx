import React from 'react';

function ToBeCompletedTask(props) {
    const {taskId,subtasks,handleCheckboxClick}=props
    return (
        <div>
             
              <div key={taskId}>
                <h3>To be Completed</h3>

                <ul>
                  {subtasks
                    .filter(({isCompleted}) => !isCompleted)
                    .map(({_id,title}) => (
                      <li
                        key={_id}
                        onClick={() =>
                          handleCheckboxClick(taskId, _id)
                        }
                      >
                        <label>{title}</label>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
    );
}

export default ToBeCompletedTask;