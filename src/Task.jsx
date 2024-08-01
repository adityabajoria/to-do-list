import { useState } from "react";

export default function Task() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [importanceRating, setImportanceRating] = useState("");
  const [dueDate, setDueDate] = useState("");
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

    setTaskList([
      { task, description, importanceRating, dueDate },
      ...taskList,
    ]);
    setTask("");
    setDescription("");
    setImportanceRating("");
    setDueDate("");
  };

  const DeleteTask = (i) => {
    setTaskList(taskList.filter((_, index) => index !== i));
  };

  function DeleteAllTasks() {
    setTaskList([]);
  }

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
        <button type="submit">ADD TASK</button>
      </form>
      <div className="to-do-list">
        <ul>
          {taskList.map((taskItem, i) => (
            <li key={i}>
              <strong>Task</strong>
              <p>{taskItem.task}</p>
              <strong>Description:</strong>
              <p>{taskItem.description}</p>
              <strong>Importance Rating:</strong>
              <p>{taskItem.importanceRating}</p>
              <strong>Due Date:</strong>
              <p>{taskItem.dueDate}</p>
              <button onClick={() => DeleteTask(i)}> delete </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="delete-all-container">
        <button onClick={DeleteAllTasks} className="delete-all-button">
          DELTE ALL TASKS
        </button>
      </div>
    </div>
  );
}
