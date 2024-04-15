import React, { useState } from 'react';
import TaskList from './TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };
//aa//
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
 
  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      {tasks.length === 0 && <p className="empty-message">No tasks, add a task</p>}
    </div>
  );
};

export default Home;