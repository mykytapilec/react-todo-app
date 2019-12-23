import React from 'react';


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks, 
      textInput: false,
      dateInput: false,
    }
  }

  textSearch = e => {

    this.setState({
      textInput: true
    })

    const text = e.target.value.toLowerCase();

    if(this.state.dateInput === true){
      const filter = this.props.tasks.filter(task => {
        return task.title.toLowerCase().includes(text);  
      });

      this.props.update({
        tasks: filter,
      });
    } 

    if(this.state.dateInput === false) {
      const filter = this.state.tasks.filter(task => {
        return task.title.toLowerCase().includes(text);
      });

      this.props.update({
        tasks: filter,
      });
    }


    if(e.target.value ===""){
      this.setState({
        textInput: false
      })
    }

  }

  dateSearch = e => {

    this.setState({
      dateInput: true
    })

    const time = Date.parse(e.target.value)/86400000;


    if(this.state.textInput === true){
      const filter = this.props.tasks.filter(task => {
        return task.dateMs === time;
      });

      this.props.update({
        tasks: filter,
      });
    } 

    if (this.state.textInput === false) {
      const filter = this.state.tasks.filter(task => {
        return task.dateMs === time;
      });
      this.props.update({
        tasks: filter,
      });
    }


    if(e.target.value ===""){

      this.setState({
        dateInput: false,
      })

      this.props.update({
        tasks: this.state.tasks,
      });

    }
  }



  render(){ 
    return (
      <div className="task-filter">
        <input
          placeholder="TEXT SEACH"
          defaultValue=""
          onChange={this.textSearch}
          type="text"
        />
        <input
          type="date" 
          id="start" 
          name="trip-start"
          defaultValue=""
          onChange={this.dateSearch}
          min="2018-01-01" 
          max="2020-12-31"
        />
      </div> 
    );
  }
}
