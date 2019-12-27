import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import Taskfilter from './components/TaskFilter.js';
import generalFilter from './components/generalFilter.js';
import Toolbar from './components/Toolbar.js';

class App extends React.Component {
  constructor(){
    // localStorage.removeItem("tasks");
    super();

    if(localStorage.tasks){
        let superTasks = JSON.parse(localStorage.getItem("tasks"));
        this.state = {
          tasks: superTasks,
          text: "",
          time: ""
        }
    } else {
      this.state = {
        tasks: [
          {id: 0, title: "create todo-react app", done: false, date: "2019-12-09", dateMs: Date.parse("2019-12-09")/86400000},
          {id: 1, title: "make some", done: true, date: "2019-12-10", dateMs:Date.parse("2019-12-10")/86400000},
          {id: 2, title: "do some", done: false, date: "2019-12-10", dateMs: Date.parse("2019-12-10")/86400000},
          {id: 3, title: "create some", done: false, date: "2019-12-10", dateMs: Date.parse("2019-12-10")/86400000},
          {id: 4, title: "delete some", done: false, date: "2019-12-11", dateMs: Date.parse("2019-12-11")/86400000},
          {id: 5, title: "change some", done: false, date: "2019-12-11", dateMs: Date.parse("2019-12-11")/86400000},
        ],
        text: "",
        time: "",
        isTitle: true,
        isSortTitleActive: false,
        isDateMs: true,
        isSortDateMsAcive: false
      }
    }
  }

  addTask = (task, date) => {
    this.setState(state => {
      let {tasks} = state;
      const freshTasks = [...tasks];
      freshTasks.push({
        id:Date.parse(new Date()),
        title: task,
        done: false,
        date: date,
        dateMs: Math.round(Date.parse(date)/86400000),
      });
      localStorage.setItem("tasks", JSON.stringify(freshTasks));
      return {tasks: freshTasks};
    }); 
  };

  doneTask = id => {
    this.setState(state=>{
      let{tasks} = state;
      const freshTasks = [...tasks];
      freshTasks.map(task => {
        task.id === id ? task.done = !task.done : task.done = task.done;
      });
      localStorage.setItem("tasks", JSON.stringify(freshTasks));
      return {tasks: freshTasks};
    });
  }

  deleteTask = id => {
    this.setState(state => {
      let {tasks} = state;
      const freshTasks = tasks.filter(task => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(freshTasks));
      return {tasks: freshTasks}; 
    })
  }

  filterText = e =>{
    this.setState({
      text: e.target.value.toLowerCase()
    })
  }

  filterDate = e => {
    this.setState({
      time: Date.parse(e.target.value)/86400000
    })
  }

  sortTitle = () => {
    this.setState({
      isTitle: !this.state.isTitle,
      isSortTitleActive: true,
      isSortDateMsAcive: false
    })
  }

  sortDate = () => {
    this.setState({
        isDateMs: !this.state.isDateMs,
        isSortTitleActive:false,
        isSortDateMsAcive:true
    })
  }

  reset = () => {
    this.setState({
      text: "",
      time: "",
      isSortTitleActive:false,
      isSortDateMsAcive:false
    })
  }

  render(){
    const { tasks, text, time, isTitle, isDateMs, isSortTitleActive, isSortDateMsAcive } = this.state;

    return (
      <div className="App">

        <h1 className="top">
          React ToDo
        </h1>


        <Taskfilter
          filterText={this.filterText}
          filterDate={this.filterDate}
        />

        <Toolbar
          sortTitle={this.sortTitle}
          sortDate={this.sortDate}
          reset={this.reset}
        />

        <TaskInput 
          addTask={this.addTask}
        />

        {generalFilter(tasks, text, time, isTitle, isDateMs, isSortTitleActive, isSortDateMsAcive).map(task => ( 

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

