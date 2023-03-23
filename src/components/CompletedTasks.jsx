import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CompletedTasks(props) {
  const {
    taskId,
    subtasks,
    handleCheckboxClick,
    hoveredItem,
    handleItemHover,
    setHoveredItem,
    handleIconClick,
  } = props;

  return (
    <div>
      <div key={taskId}>
        <p>Completed Tasks</p>
        <ul>
          {subtasks
            .filter(({ isCompleted }) => isCompleted)
            .map(({ _id, title }) => (
              <li
                className="list-item"
                onMouseOver={() => handleItemHover(_id)}
                key={_id}
                onMouseOut={() => setHoveredItem(null)}
              >
                <label onClick={() => handleCheckboxClick(taskId, _id)}>
                  {title}
                </label>
                {_id == hoveredItem && (
                  <FontAwesomeIcon
                    onClick={()=>handleIconClick(_id,taskId)}
                    color="red"
                    icon={faTrash}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CompletedTasks;
