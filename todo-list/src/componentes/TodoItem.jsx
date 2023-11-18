import React, { useState } from 'react';

function TodoItem({ task, deleteTask, id }) {

    const [isComplete, setIsComplete] = useState(false)

    const handlerComplete = ()=>{
        setIsComplete(!isComplete)
    }

  return (
    <li>
      <p>{task}{isComplete? <p>COMPLETADO</p>: <p></p>}</p>
      
      <button onClick={() => handlerComplete()}>{isComplete? "💔" : "❤️"}</button>
      <button onClick={()=> deleteTask(id)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;