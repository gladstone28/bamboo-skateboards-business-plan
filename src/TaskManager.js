// TaskManager.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('tasks').onSnapshot(snapshot => {
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const addTask = () => {
    db.collection('tasks').add({ task: newTask });
    setNewTask('');
  };

  const deleteTask = (id) => {
    db.collection('tasks').doc(id).delete();
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task} <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
