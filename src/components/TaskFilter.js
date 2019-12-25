import React from 'react';

export default class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    const {filterText,filterDate} = this.props;

    return (
      <div className="task-filter">
        <input
          placeholder="TEXT SEACH"
          defaultValue=""
          onChange={filterText}

          type="text"
        />
        <input
          type="date" 
          id="start" 
          name="trip-start"
          defaultValue=""
          onChange={filterDate}
          min="2018-01-01" 
          max="2020-12-31"
        />
      </div> 
    );
  }
}
