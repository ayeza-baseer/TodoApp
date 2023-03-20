function TaskHeading(props) {
  const { title, subtaskLength, completedSubtask } = props;
  return (
    <>
      <h2
        style={{
          textDecorationLine:
            subtaskLength == completedSubtask &&
           (subtaskLength &&
            completedSubtask != 0) 
              ? "line-through"
              : "none",
        }}
      >
        {title}
      </h2>
    </>
  );
}

export default TaskHeading;
