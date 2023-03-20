import React, { useState } from "react";

import TaskHeading from "./TaskHeading";
import ToBeCompletedTask  from "./ToBeCompletedTask";
import CompletedSubtasks from "./CompletedSubtasks";
import { tasksList } from "../utils/TaskList";
import "./Task.css";
import StatusBar from "./StatusBar";

function Task() {
  const [tasks, setTasks] = useState(tasksList);
  const [completedTask, setCompletedTask] = useState([]);

  const handleCheckboxClick = (taskId, subtaskId) => {
    let copyArray = [...tasks];
    let task = copyArray.find((t) => t._id === taskId);
    let subtask = task.subtasks.find((subtask) => subtaskId == subtask._id);
    subtask.isCompleted = !subtask.isCompleted;
    if (subtask.isCompleted) task.completedSubtask++;
    else task.completedSubtask--;
    setCompletedTask([...completedTask, subtask]);
    setTasks(copyArray);
  };

  return (
    <>
      {tasks.map((task) => (
        <div key={task._id}>
            <TaskHeading title={task.title} subtaskLength={task.subtasks.length} completedSubtask={task.completedSubtask}/>
          <div className="task">
            <ToBeCompletedTask taskId={task._id} subtasks={task.subtasks} handleCheckboxClick={handleCheckboxClick}  />
            <CompletedSubtasks taskId={task._id} subtasks={task.subtasks} handleCheckboxClick={handleCheckboxClick}/>
          </div>
          <StatusBar subtaskLength={task.subtasks.length} completedTask={task.completedSubtask}/>
        </div>
      ))}
    </>
  );
}

export default Task;
