import { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks
  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleToggleComplete = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  return (
    <div className="container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Study Planner</h2>
        <p>Dashboard</p>
        <p>Tasks</p>
        <p>Settings</p>
      </div>

      {/* Main */}
      <div className="main">
        <h1>Dashboard</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        <h3>Tasks</h3>

        {tasks.map((t, index) => (
          <div className="task-item" key={index}>
            
            <div className="task-left">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => handleToggleComplete(index)}
              />

              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none"
                }}
              >
                {t.text}
              </span>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Dashboard;