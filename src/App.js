import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import Taskfilter from './components/TaskFilter.js';
import Toolbar from './components/Toolbar.js';

class App extends React.Component {
  constructor(){
    // localStorage.removeItem("tasks");
    super();

    if(localStorage.tasks){
        let superTasks = JSON.parse(localStorage.getItem("tasks"))
        this.state = {
          tasks: superTasks,
          textSearch: false,
          dateSearch: false
        }
    } else {
      this.state = {
        tasks: [
          {id: 0, title: "create todo-react app", done: false, date: new Date(2019,11, 9).toDateString(), dateMs: Math.round(Date.parse(new Date(2019,11, 9).toDateString())/86400000)},
          {id: 1, title: "make some", done: true, date: new Date(2019, 11, 9).toDateString(), dateMs: Math.round(Date.parse(new Date(2019, 11, 9).toDateString())/86400000)},
          {id: 2, title: "do some", done: false, date: new Date(2019, 11, 10).toDateString(), dateMs: Math.round(Date.parse(new Date(2019, 11, 10).toDateString())/86400000)},
          {id: 3, title: "create some", done: false, date: new Date(2019, 11, 10).toDateString(), dateMs: Math.round(Date.parse(new Date(2019, 11, 10).toDateString())/86400000)},
          {id: 4, title: "delete some", done: false, date: new Date(2019, 11, 10).toDateString(), dateMs: Math.round(Date.parse(new Date(2019, 11, 10).toDateString())/86400000)},
          {id: 5, title: "change some", done: false, date: new Date(2019, 11, 11).toDateString(), dateMs: Math.round(Date.parse(new Date(2019, 11, 11).toDateString())/86400000)},
        ],
        textSearch: false,
        dateSearch: false
      }
    }

    this.initialData();
  }

  addTask = task => {
    this.setState(state => {
      let {tasks} = state;
      tasks.push({
        id:Date.parse(new Date()),
        title: task,
        done: false,
        date: new Date().toDateString(),
        dateMs: Math.round(Date.parse(new Date().toDateString())/86400000),
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    }); 
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(()=>{
      let{tasks} = this.state;
      tasks[index].done = !tasks[index].done;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    });
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    const index2 = this.initialData.map(task => task.id).indexOf(id);
    this.setState(()=>{
      let{tasks} = this.state;
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return tasks;
    })

    if(this.state.textSearch === true || this.state.dateSearch === true){
      this.initialData.splice(index2, 1);
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  updateData(config) {
    this.setState(config);
  }

  initialData() {
    this.initialData = this.state.tasks;
  }

  render(){
    const { tasks, textSearch, dateSearch } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">

        <h1 className="top">
          Active Tasks: {activeTasks.length}
        </h1>

        <Taskfilter 
          tasks={this.initialData} 
          update={this.updateData.bind(this)}
        />

        <Toolbar 
          initialData={this.initialData} 
          data={this.state.tasks} 
          update={this.updateData.bind(this)} 
        />

        <TaskInput 
          textSearch={textSearch}
          dateSearch={dateSearch}
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

