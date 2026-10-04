import { useState, useEffect } from "react"; // import the two hooks we need
import TaskCard from "./components/TaskCard.jsx"; // import our TaskCard component
import "./App.css"; // import the CSS file

function App() {
  // TASK 1: store the list of tasks using useState
  const [tasks, setTasks] = useState([ // tasks = current list, setTasks = function to change the list
    { id: 1, title: "Finish React assignment", category: "Study" },
    { id: 2, title: "Return library book", category: "Campus" },
    { id: 3, title: "Group meeting", category: "Project" },
  ]);

  // TASK 3: store what the user types in the title box
  const [title, setTitle] = useState(""); // title = current text, setTitle = function to change the text
  // TASK 3: store what the user types in the category box
  const [category, setCategory] = useState(""); // category = current text, setCategory = function to change the text

  // TASK 4: runs when the page loads and whenever "tasks" changes
  useEffect(() => {
    console.log("Task list updated!");        // message in console
    console.log("Total tasks:", tasks.length); // number of tasks
  }, [tasks]); // [tasks] means "watch the tasks list"

  // TASK 3: runs when the user clicks the Add Task button
  function addTask() { 
   // create a new task object from the typed values
    const newTask = {
      id: Date.now(),    // current time in ms gives a unique id
      title: title,      // text from the title box
      category: category // text from the category box
    };

    // copy old tasks (...tasks) and add the new one at the end
    setTasks([...tasks, newTask]); // spread operator is used to copy the old array and add the new task

    // clear both boxes
    setTitle(""); // clear the title input box
    setCategory(""); // clear the category input box
  }

  return (
    <div className="app">
      <h1>Campus Task Board</h1>

      {/* TASK 3: title input. value = state, onChange updates the state */}
      <input
        placeholder="Task title" // placeholder text
        value={title} // value = state
        onChange={(e) => setTitle(e.target.value)} // onChange updates the title state when user types
      />

      {/* TASK 3: category input */}
      <input
        placeholder="Category" // placeholder text
        value={category} // value = state
        onChange={(e) => setCategory(e.target.value)} // onChange updates the category state when user types
      />

      {/* TASK 3: button, onClick calls addTask */}
      <button onClick={addTask}>Add Task</button> // button to add a new task

      {/* TASK 1 + 2: loop over tasks and show a TaskCard for each */}
      {tasks.map((task) => ( 
        // map over tasks and render a TaskCard for each task
        <TaskCard key={task.id} title={task.title} category={task.category} /> 
      ))}
    </div>
  );
}

export default App;