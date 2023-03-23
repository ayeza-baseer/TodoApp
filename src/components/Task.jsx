import React, { useState } from "react";

import TaskHeading from "./TaskHeading";
import ToBeCompletedTask from "./ToBeCompletedTask";
import CompletedTasks from "./CompletedTasks";
import { tasksList } from "../utils/TaskList";
import "./Task.css";
import StatusBar from "./StatusBar";
import SubtaskButton from "./SubtaskButton";
import TaskButton from "./TaskButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Task() {
  const [tasks, setTasks] = useState(tasksList);
  const [completedTask, setCompletedTask] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [taskInputValue, setTaskInputValue] = useState("");
  const [indexItem, setIndex] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  const handleIconClick = (subtaskId, taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this subtask?"
    );
    if (confirmed) {
      let copyArray = [...tasks];
      const task = copyArray.find((task) => task._id == taskId);
      task.completedSubtask--;
      task.subtasks = task.subtasks.filter(
        (subtask) => subtask._id != subtaskId
      );

      setTasks(copyArray);
    }
  };

  const handleTaskClick = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      let copyArray = [...tasks];
      const task = copyArray.filter((task) => task._id != taskId);
      setTasks(task);
    }
  };
  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleTaskHover = (index) => {
    setHoveredTask(index);
  };

  const handleTask = (event) => {
    setTaskInputValue(event.target.value);
  };
  const handleClose = () => {
    setIndex("close");
  };
  function handleTaskKeyDown(event) {
    if (taskInputValue != "") {
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
        setShowInput(false);
      }
    }
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  function handleKeyDown(event, taskId) {
    if (inputValue != "" && isNaN(inputValue)) {
      if (event.key === "Enter") {
        let copyArray = [...tasks];
        let task = copyArray.find((task) => task._id == taskId);
        task.subtasks.push({
          _id: Math.random() * 1000,
          title: inputValue,
          isCompleted: false,
        });

        setTasks(copyArray);
        setInputValue("");
      }
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
      <div className="mainContent">
        {tasks.map(({ _id, title, completedSubtask, subtasks }) => (
          <div key={_id}>
            <div className="taskHeading">
              <TaskHeading
                title={title}
                subtaskLength={subtasks.length}
                completedSubtask={completedSubtask}
                handleTaskHover={handleTaskHover}
                taskId={_id}
                hoveredTask={hoveredTask}
                setHoveredTask={setHoveredTask}
                handleTaskClick={handleTaskClick}
              />
              <SubtaskButton
                toggleInputField={toggleInputField}
                taskId={_id}
                index={indexItem}
              />
            </div>

            <div className="task">
              <div>
                <div key={_id}>
                  <p>To Completed Tasks</p>
                  {indexItem == _id && (
                    <>
                      <div className="input-button">
                        <input
                          className="input-field"
                          type="text"
                          placeholder="Enter your text here"
                          value={inputValue}
                          onKeyDown={(event) => handleKeyDown(event, _id)}
                          onChange={handleInputChange}
                        />
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          style={{ fontSize: "20px" }}
                          color="red"
                          onClick={handleClose}
                        />
                      </div>
                    </>
                  )}
                  <ToBeCompletedTask
                    taskId={_id}
                    subtasks={subtasks}
                    handleCheckboxClick={handleCheckboxClick}
                  />
                </div>
              </div>

              <CompletedTasks
                taskId={_id}
                subtasks={subtasks}
                handleCheckboxClick={handleCheckboxClick}
                handleItemHover={handleItemHover}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
                handleIconClick={handleIconClick}
              />
            </div>
            <StatusBar
              subtaskLength={subtasks.length}
              completedTask={completedSubtask}
            />
          </div>
        ))}
        <div className="taskButtonPosition">
          <div className="button-input">
            <TaskButton
              showInput={showInput}
              toggleInputTask={toggleInputTask}
            />
          </div>
          <div>
            <div className="input-button">
              {showInput && (
                <>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter your Task"
                    value={taskInputValue}
                    onKeyDown={(event) => handleTaskKeyDown(event)}
                    onChange={handleTask}
                  />
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ fontSize: "20px" }}
                    color="red"
                    onClick={toggleInputTask}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
