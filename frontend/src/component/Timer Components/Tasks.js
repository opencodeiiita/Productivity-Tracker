import { speedDialActionClasses } from '@mui/material';
import { handleBreakpoints } from '@mui/system';
import React, { useState, useEffect } from 'react';
import './tasks.css';
function Tasks(todos) {
  //   todos.todos.map(elem => console.log('interesting', elem));
  //   console.log(typeof Array.from(todos.todos), Array.from(todos.todos));
  return (
    <div className="tasks_list">
      TASKS
      {Array.from(todos.todos).map((todo, index) => (
        <div className="task" key={index}>
          {todo.name} {todo.desc} {todo.currentCount}/{todo.reps}
        </div>
      ))}
    </div>
  );
}
export default Tasks;
