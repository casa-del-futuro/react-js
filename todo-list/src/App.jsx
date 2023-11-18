import './App.css';

import React, { useState } from 'react';
import TodoList from './componentes/TodoList';

const  App = () =>  {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  const addTask = () => {
    if (newTasks.trim() !== ""){
      setTasks([...tasks, newTasks])
      setNewTasks("")
    }
  };

/*   const addTask = (newTask){
    const listado = [...tasks]
    tasks.push(newTask)
  } */

  const completeTask = (index) => {
    // Implementa la lógica para marcar como completada
  };

  const deleteTask = (index) => {
    const newListTasks = tasks.filter((task, id)=> index != id)
    setTasks(newListTasks)
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
      <input type="text" value={newTasks} onChange={(e)=> setNewTasks(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={() => addTask()}>Agregar tarea</button>
    </div>
  );
}

export default App;
