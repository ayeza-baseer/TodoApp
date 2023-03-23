import React from "react";

function StatusBar(props) {
  const { subtaskLength, completedTask } = props;
  return (
    <div className="status">
      <table>
        <tr>
          <td>Total Tasks: {subtaskLength}</td>
          <td>Completed Subtasks: {completedTask}</td>
        </tr>
      </table>
    </div>
  );
}

export default StatusBar;
