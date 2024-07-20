import React, { useState } from "react";

export default function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    }

    if (taskList.includes(task)) {
      alert(`This task already exists, '${task}'.`);
      return;
    }

    setTaskList([task, ...taskList]);
    setTask("");
  };

  function DeleteAllTasks() {
    setTaskList([]);
  }

  const DeleteTask = (index) => {
    const updatedTask = [...taskList];
    updatedTask.splice(index, 1);
    setTaskList(updatedTask);
  };

  return (
    <div className="app">
      <h1 className="title">TO-DO-LIST</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your tasks:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button>ADD TASK</button>
      </form>
      <div className="to-do-list">
        <ul>
          {taskList.map((taskName, index) => (
            <li key={index}>
              {taskName}
              <button onClick={() => DeleteTask(index)}> X</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={DeleteAllTasks}>DELTE ALL TASKS</button>
    </div>
  );
}
