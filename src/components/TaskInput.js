import React from 'react';

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      isInput: false,
      date: '',
      isDate: false,
    };
  }

  addTask = () => {
    const {input, date} = this.state;
    if(input && date !== "" ){
      this.props.addTask(input, date);
      this.setState({
        input: '',
        isInput: false,
        date: '',
        isDate: false,
      });
    } 

    if (input === "" || input[0] === " ") {
      this.setState({input: "", isInput: true});
    } else {
      this.setState({isInput: false});
    }

    if (date === "") {
      this.setState({date: "", isDate: true});
    } else {
      this.setState({isDate: false});
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
    const {input,isInput, isDate} = this.state;

    return (
      <div className="task-input">
        <input 
          className={isInput ? "inputBorderStyle" : ""}
          placeholder="NEW ITEMS"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={input}>
        </input>
        <input
          className={isDate ? "inputBorderStyle" : ""}
          type="date" 
          id="start" 
          name="trip-start"
          defaultValue=""
          onChange={this.dateChange}
          onKeyPress={this.handleEnter}
          min="2018-01-01" 
          max="2020-12-31"
        />
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}


