import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskHeading(props) {
  const {
    title,
    subtaskLength,
    completedSubtask,
    handleTaskHover,
    taskId,
    setHoveredTask,
    hoveredTask,
    handleTaskClick,
  } = props;
  return (
    <div
      onMouseOver={() => handleTaskHover(taskId)}
      onMouseOut={() => setHoveredTask(null)}
    >
      <div className="inner-heading">
        <div>
          <p
            style={{
              textDecorationLine:
                subtaskLength == completedSubtask &&
                subtaskLength &&
                completedSubtask != 0
                  ? "line-through"
                  : "none",
            }}
          >
            {title}
          </p>
        </div>
        <div>
          {hoveredTask == taskId && (
               <FontAwesomeIcon
                className="icon"
                color="red"
                icon={faTrash}
                onClick={() => handleTaskClick(taskId)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskHeading;
