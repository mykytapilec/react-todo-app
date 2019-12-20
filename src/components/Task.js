import React from 'react';

export default ({task, ...props}) =>{

  const className = "task " + (task.done ? "task-done" : "");

  return (
    <div className={className}>
      <input 
        type="checkbox" 
        checked={task.done}
        onChange={() => props.onChange(task.id)}
      />
      <p className="text">{task.title}</p>
      <p className="date">{task.date}</p>
      <div className="actionBtn">
        <p onClick={() => props.deleteTask(task.id)}>&#10060;</p>
      </div>
    </div>
  )
}; 

