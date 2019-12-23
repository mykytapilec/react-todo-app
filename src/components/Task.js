import React from 'react';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {task, onChange, deleteTask} = this.props;
    const className = "task " + (task.done ? "task-done" : "");
    

    return (
    <div className={className}>
      <input 
        type="checkbox" 
        checked={task.done}
        onChange={() => onChange(task.id)}
      />
      <p className="text">{task.title}</p>
      <p className="date">{task.date}</p>
      <div className="actionBtn">
        <p onClick={() => deleteTask(task.id)}>&#10060;</p>
      </div>
    </div>
    )
  }
}