import React from 'react';

function StatusBar(props) {
    const {subtaskLength,completedTask}=props
    return (
        <div className="status">
            <div className="statusBar">
              <h2>Total Tasks:{subtaskLength}</h2>
              <h2>Completed Subtasks:{completedTask}</h2>
            </div>
          </div>
    );
}

export default StatusBar;