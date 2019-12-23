import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import Taskfilter from './components/TaskFilter.js';
import Toolbar from './components/Toolbar.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      tasks: [
        {id: 0, title: "create todo-react app", done: false, date: "2019-12-09", dateMs: Date.parse("2019-12-09")/86400000},
        {id: 1, title: "make some", done: true, date: "2019-12-10", dateMs:Date.parse("2019-12-10")/86400000},
        {id: 2, title: "do some", done: false, date: "2019-12-10", dateMs: Date.parse("2019-12-10")/86400000},
        {id: 3, title: "create some", done: false, date: "2019-12-10", dateMs: Date.parse("2019-12-10")/86400000},
        {id: 4, title: "delete some", done: false, date: "2019-12-11", dateMs: Date.parse("2019-12-11")/86400000},
        {id: 5, title: "change some", done: false, date: "2019-12-11", dateMs: Date.parse("2019-12-11")/86400000},
      ],
    }
  }
  

  addTask = (task, date) => {
    const refreshTasks = [...this.state.tasks];

    refreshTasks.push({
      id:Date.parse(new Date()),
      title: task,
      done: false,
      date: date,
      dateMs: Math.round(Date.parse(date)/86400000),
    });

    this.setState({
      tasks:refreshTasks,
    })

  };

  doneTask = id => {
    const index = this.state.tasks.findIndex(task => task.id === id);

    const refreshTasks = [...this.state.tasks];
    refreshTasks[index].done = !refreshTasks[index].done;

    this.setState({
      tasks:refreshTasks,
    });
  }

  deleteTask = id => {  
    const freshTasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({
      tasks: freshTasks
    })
    
  }

  updateData = config => {
    this.setState(config);
  }

  render(){
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">

        <h1 className="top">
          Active Tasks: {activeTasks.length}
        </h1>

        <Taskfilter 
          tasks={tasks} 
          update={this.updateData.bind(this)}
        />

        <Toolbar 
          // initialData={this.initialData} 
          data={tasks} 
          update={this.updateData.bind(this)} 
        />

        <TaskInput 
          addTask={this.addTask}
        />

        {[...activeTasks, ... doneTasks].map(task => (      
          <Task 
            onChange={this.doneTask}
            deleteTask={this.deleteTask}
            task={task}
            key={task.id}
          />
        ))}  

      </div> 
    );
  }
}

export default App;

