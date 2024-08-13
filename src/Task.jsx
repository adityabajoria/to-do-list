import React, { useState } from "react";

export default function Task() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [importanceRating, setImportanceRating] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") {
      return;
    } else if (taskList.some((t) => t.task === task)) {
      alert(`This task already exists -> '${task}' Enter a different task.`);
      return;
    }

    setTaskList([
      ...taskList,
      { task, description, importanceRating, dueDate },
    ]);

    // Clear the input fields
    setTask("");
    setDescription("");
    setImportanceRating("");
    setDueDate("");
  };

  const deleteTask = (i) => {
    setTaskList(taskList.filter((_, index) => index !== i));
  };

  const deleteAllTasks = () => {
    setTaskList([]);
  };

  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Importance Rating:
          <input
            type="text"
            value={importanceRating}
            onChange={(e) => setImportanceRating(e.target.value)}
          />
        </label>
        <br />
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">ADD TASK</button>
      </form>
      <ul>
        {taskList.map((taskItem, i) => (
          <li key={i}>
            <b>Task</b> {taskItem.task}
            <br />
            <strong>Description:</strong> {taskItem.description}
            <br />
            <strong>Importance Rating:</strong> {taskItem.importanceRating}
            <br />
            <strong>Due Date:</strong> {taskItem.dueDate}
            <br />
            <button onClick={() => deleteTask(i)}> X </button>
          </li>
        ))}
      </ul>
      <button onClick={deleteAllTasks}>Delete ALL TASKS</button>
    </div>
  );
}
