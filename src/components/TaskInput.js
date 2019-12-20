import React from 'react';

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      style: ''
    };
  }

  addTask = () => {
    const {input} = this.state;
    if(input && input[0] !== " " ){
      this.props.addTask(input);
      this.setState({input:"", style:""});
    } 

    if (input === "" || input[0] === " ") {
      this.setState({input: "", style: "inputBorderStyle"});
    }
  }

  inputChange = event => {
    this.setState({input: event.target.value});
  };

  handleEnter = event => {
    if(event.key === "Enter") this.addTask();
  };

  render() {
    const {input,style} = this.state;

    return (
      <div className="task-input" id={(this.props.textSearch || this.props.dateSearch) ? "inputNone" : ""}>
        <input 
          className={style}
          placeholder="NEW ITEMS"
          onChange={this.inputChange}
          onKeyPress={this.handleEnter}
          value={input}>
        </input>
        <button onClick={this.addTask}>ADD</button>
      </div>
    );
  }
}


