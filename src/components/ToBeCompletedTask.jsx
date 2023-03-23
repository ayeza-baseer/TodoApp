import React from "react";

function ToBeCompletedTask(props) {
  const { taskId, subtasks, handleCheckboxClick } = props;
  return (
    <ul>
      {subtasks
        .filter(({ isCompleted }) => !isCompleted)
        .map(({ _id, title }) => (
          <li className="list-item" key={_id} onClick={() => handleCheckboxClick(taskId, _id)}>
            <label>{title}</label>
          </li>
        ))}
    </ul>
  );
}

export default ToBeCompletedTask;
