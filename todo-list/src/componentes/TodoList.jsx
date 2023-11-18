import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem deleteTask={deleteTask} id={index} key={index} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;