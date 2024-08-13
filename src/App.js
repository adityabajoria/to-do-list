import "./App.css";
import Task from "./Task.jsx";
export default function App() {
  return (
    <div className="App">
      <Task />
    </div>
    /*
   Logic ->
   include an add button, delete button, and check duplicate
   Add Button -> take input from user using forms,
   display tasks when clicked the 'add' button.
   Check Duplicate -> if name of task already exists,
   give alert message
   Delete Button -> each task must have an id, when the
   delete button is clicked, remove the task with the id.
   */
  );
}
