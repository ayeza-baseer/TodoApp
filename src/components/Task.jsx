import React, { useState } from "react";

import TaskHeading from "./TaskHeading";
import ToBeCompletedTask from "./ToBeCompletedTask";
import CompletedTasks from "./CompletedTasks";
import { tasksList } from "../utils/TaskList";
import "./Task.css";
import StatusBar from "./StatusBar";
import SubtaskButton from "./SubtaskButton";
import TaskButton from "./TaskButton";

function Task() {
  const [tasks, setTasks] = useState(tasksList);
  const [completedTask, setCompletedTask] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [taskInputValue, setTaskInputValue] = useState("");
  const [indexItem, setIndex] = useState(0);

  const handleTask = (event) => {
    console.log(event.target.value);
    setTaskInputValue(event.target.value);
  };
  function handleTaskKeyDown(event) {
    if (event.key === "Enter") {
      let newTask = {
        _id: Math.random() * 1000,
        title: taskInputValue,
        isCompleted: false,
        completedSubtask: 0,
        subtasks: [],
      };
      setTasks([...tasks, newTask]);
      setTaskInputValue("");
    }
  }
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  function handleKeyDown(event, taskId) {
    if (event.key === "Enter") {
      let copyArray = [...tasks];
      console.log(taskId);
      let task = copyArray.find((task) => task._id == taskId);
      task.subtasks.push({
        _id: Math.random() * 1000,
        title: inputValue,
        isCompleted: false,
      });
      console.log(task, "task");
      setTasks(copyArray);
      setInputValue("");
    }
  }

  const toggleInputField = (index) => {
    setIndex(index);
  };

  const toggleInputTask = () => {
    setShowInput(!showInput);
  };

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
      {tasks.map(({ _id, title, completedSubtask, subtasks }) => (
        <div key={_id}>
          <TaskHeading
            title={title}
            subtaskLength={subtasks.length}
            completedSubtask={completedSubtask}
          />
          <SubtaskButton toggleInputField={toggleInputField} taskId={_id} />

          {indexItem == _id && (
            <input
              type="text"
              placeholder="Enter your text here"
              value={inputValue}
              onKeyDown={(event) => handleKeyDown(event, _id)}
              onChange={handleInputChange}
            />
          )}

          <div className="task">
            <ToBeCompletedTask
              taskId={_id}
              subtasks={subtasks}
              handleCheckboxClick={handleCheckboxClick}
              
            
            />
            <CompletedTasks
              taskId={_id}
              subtasks={subtasks}
              handleCheckboxClick={handleCheckboxClick}
             
              
            />
          </div>
          <StatusBar
            subtaskLength={subtasks.length}
            completedTask={completedSubtask}
          />
        </div>
      ))}
      <TaskButton toggleInputTask={toggleInputTask} />
      {showInput && (
        <input
          type="text"
          placeholder="Enter your Task"
          value={taskInputValue}
          onKeyDown={(event) => handleTaskKeyDown(event)}
          onChange={handleTask}
        />
      )}
    </>
  );
}

export default Task;
