import React from 'react';

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      styleInputText: '',
      date: '',
      styleInputDate:''
    };
  }

  addTask = () => {
    const {input, date} = this.state;
    if(input && date !== "" ){
      this.props.addTask(input, date);
      this.setState({
        input:"", 
        styleInputText:"",
        date:"",
        styleInputDate:""
      });
    } 

    if (input === "" || input[0] === " ") {
      this.setState({input: "", styleInputText: "inputBorderStyle"});
    }

    if (date === "") {
      this.setState({date: "", styleInputDate: "inputBorderStyle"});
    }
  }

  dateChange = event => {
    this.setState({date: event.target.value});
  }

  inputChange = event => {
    this.setState({input: event.target.value});
  };

  handleEnter = event => {
    if(event.key === "Enter") this.addTask();
  };

  render() {
    const {input,styleInputText, styleInputDate} = this.state;

    return (
      <div className="task-input" id={(this.props.textSearch || this.props.dateSearch) ? "inputNone" : ""}>
        <input 
          className={styleInputText}
          placeholder="NEW ITEMS"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={input}>
        </input>
        <input
          className={styleInputDate}
          type="date" 
          id="start" 
          name="trip-start"
          defaultValue=""
          onChange={this.dateChange}
          min="2018-01-01" 
          max="2020-12-31"
        />
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}


